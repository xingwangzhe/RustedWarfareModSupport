/**
 * INI formatting utilities (conservative formatter)
 * - Aligns keys in each section/block
 * - Preserves comments, blank lines, section headers, key order, and values
 */
const SECTION_REGEX = /^\s*\[.*\]\s*$/;
const COMMENT_REGEX = /^\s*[;#]/;
const KV_REGEX = /^(\s*)([^=:#]+?)(\s*[:=])(\s*)(.*?)(\s*)([;#].*)?$/;

export function conservativeFormatIni(text: string): string {
  const lines = text.split(/\r?\n/);
  const out = [...lines];

  const isSection = (ln: string) => SECTION_REGEX.test(ln);
  const isComment = (ln: string) => COMMENT_REGEX.test(ln);

  const kvRegex = KV_REGEX;

  let blockStart = 0;
  const flush = (start: number, end: number) => {
    const kvIdx: number[] = [];
    const keyLens: number[] = [];
    for (let i = start; i < end; i++) {
      const ln = lines[i];
      if (!ln) {
        continue;
      }
      if (isComment(ln) || isSection(ln)) {
        continue;
      }
      const m = ln.match(kvRegex);
      if (m) {
        kvIdx.push(i);
        keyLens.push(m[2].trim().length);
      }
    }
    if (kvIdx.length === 0) {
      return;
    }
    for (const i of kvIdx) {
      const ln = lines[i];
      const m = ln.match(kvRegex)!;
      const leading = m[1] || "";
      const key = m[2] || "";
      const sepCharMatch = (m[3] || "=").match(/[:=]/);
      const sepChar = sepCharMatch ? sepCharMatch[0] : "=";
      const value = m[5] || "";
      const comment = m[7] || "";

      const keyTrim = key.trim();
      const valueTrim = value.trim();
      const afterSep = valueTrim.length > 0 ? ` ${valueTrim}` : "";
      out[i] = `${leading}${keyTrim}${sepChar}${afterSep}${comment ? " " + comment.trim() : ""}`;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    if (isSection(lines[i])) {
      flush(blockStart, i);
      blockStart = i + 1;
    }
  }
  flush(blockStart, lines.length);

  // Now ensure exactly one blank line between sections and remove blank lines inside sections
  const finalLines: string[] = [];
  // find indices of section headers
  const sectionIndices: number[] = [];
  for (let i = 0; i < out.length; i++) {
    const ln = (out[i] ?? "").replace(/\s+$/, "");
    if (isSection(ln)) {
      sectionIndices.push(i);
    }
  }

  const pushSegment = (start: number, end: number, isFirstSegment: boolean) => {
    // start..end-1 are lines for this segment (either before first section or within a section)
    // remove blank lines inside segment
    const seg: string[] = [];
    for (let j = start; j < end; j++) {
      const ln = (out[j] ?? "").replace(/\s+$/, "");
      if (ln === "") {
        continue;
      } // drop blank lines inside a block
      seg.push(ln);
    }
    if (seg.length === 0) {
      return;
    }
    if (!isFirstSegment && finalLines.length > 0) {
      // ensure single blank line between previous content and this segment
      finalLines.push("");
    }
    finalLines.push(...seg);
  };

  if (sectionIndices.length === 0) {
    // no sections: treat whole file as single block
    pushSegment(0, out.length, true);
  } else {
    // content before first section
    const first = sectionIndices[0];
    pushSegment(0, first, true);
    // for each section, include header and its following non-section lines
    for (let s = 0; s < sectionIndices.length; s++) {
      const idx = sectionIndices[s];
      // push section header with single blank line separation handled in pushSegment
      if (finalLines.length > 0) {
        finalLines.push("");
      }
      finalLines.push(out[idx].replace(/\s+$/, ""));
      const next = s + 1 < sectionIndices.length ? sectionIndices[s + 1] : out.length;
      // push the body of this section (without blank lines)
      const body: string[] = [];
      for (let j = idx + 1; j < next; j++) {
        const ln = (out[j] ?? "").replace(/\s+$/, "");
        if (ln === "") {
          continue;
        }
        body.push(ln);
      }
      if (body.length > 0) {
        finalLines.push(...body);
      }
    }
  }

  // preserve original trailing newline
  const hasTrailing = /\r?\n$/.test(text);
  const ret = finalLines.join("\n");
  return hasTrailing ? ret + "\n" : ret;
}
