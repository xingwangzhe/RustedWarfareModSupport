import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const grammarPath = resolve(process.cwd(), "syntaxes/ini.tmLanguage.json");
const grammar = JSON.parse(readFileSync(grammarPath, "utf8")) as {
  scopeName: string;
  repository: Record<string, { match?: string; begin?: string; patterns?: unknown[] }>;
};

describe("Rusted Warfare syntax grammar", () => {
  it("recognizes the core nested syntax regions", () => {
    expect(grammar.scopeName).toBe("source.ini");
    expect(grammar.repository.section).toBeDefined();
    expect(grammar.repository.templateKey).toBeDefined();
    expect(grammar.repository.memoryDefinition).toBeDefined();
    expect(grammar.repository.logicExpression).toBeDefined();
    expect(JSON.stringify(grammar.repository.section)).toContain("spawnUnits");
    expect(JSON.stringify(grammar.repository.section)).toContain("spawnProjectiles");
  });

  it("includes the operators and interpolation used by LogicBoolean", () => {
    const logicExpression = JSON.stringify(grammar.repository.logicExpression);
    const customVariable = JSON.stringify(grammar.repository.customVariable);

    expect(logicExpression).toContain("operator");
    expect(logicExpression).toContain("memory");
    expect(grammar.repository.customVariable).toBeDefined();
    expect(customVariable).toContain("memory");
  });

  it("supports template directives and @memory declarations", () => {
    const templateKey = JSON.stringify(grammar.repository.templateKey);
    const memoryDefinition = JSON.stringify(grammar.repository.memoryDefinition);

    expect(templateKey).toContain("copyFrom");
    expect(memoryDefinition).toContain("@memory");
  });
});
