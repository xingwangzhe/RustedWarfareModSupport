import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

/**
 * Find nearest mod root by walking up directories looking for mod-info.json or mod-info.txt
 */
export function findNearestModRoot(startDir: string): string | null {
    let dir = startDir;
    try {
        while (dir && dir !== path.dirname(dir)) {
            const modInfoJson = path.join(dir, 'mod-info.json');
            const modInfoTxt = path.join(dir, 'mod-info.txt');
            if (fs.existsSync(modInfoJson) || fs.existsSync(modInfoTxt)) {
                return dir;
            }
            dir = path.dirname(dir);
        }
    } catch {
        // ignore
    }
    return null;
}

/**
 * Resolve an image path candidate using several strategies. Returns an absolute path or null.
 */
export function resolveImagePath(candidate: string, document: vscode.TextDocument): string | null {
    const workspaceFolders = vscode.workspace.workspaceFolders || [];
    let c = candidate.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');

    // ROOT: prefix -> try mod root then workspace root
    if (/^ROOT[:/]/i.test(c)) {
        const rel = c.replace(/^ROOT[:/]+/i, '');
        const modRoot = findNearestModRoot(path.dirname(document.fileName));
        if (modRoot) {
            const p = path.join(modRoot, rel);
            if (fs.existsSync(p)) {
                return p;
            }
        }
        if (workspaceFolders.length > 0) {
            const wf = workspaceFolders[0].uri.fsPath;
            const p = path.join(wf, rel);
            if (fs.existsSync(p)) {
                return p;
            }
        }
    }

    // absolute path
    if (path.isAbsolute(c)) {
        if (fs.existsSync(c)) {
            return c;
        }
    }

    // relative to document
    const docDir = path.dirname(document.fileName);
    let p = path.join(docDir, c);
    if (fs.existsSync(p)) {
        return p;
    }

    const commonDirs = ['images', 'graphics', 'sprites', 'art', 'icons'];
    for (const d of commonDirs) {
        p = path.join(docDir, d, c);
        if (fs.existsSync(p)) {
            return p;
        }
    }

    const modRoot = findNearestModRoot(docDir);
    if (modRoot) {
        for (const d of commonDirs) {
            p = path.join(modRoot, d, c);
            if (fs.existsSync(p)) {
                return p;
            }
        }
        p = path.join(modRoot, c);
        if (fs.existsSync(p)) {
            return p;
        }
    }

    if (workspaceFolders.length > 0) {
        const wf = workspaceFolders[0].uri.fsPath;
        for (const d of commonDirs) {
            p = path.join(wf, d, c);
            if (fs.existsSync(p)) {
                return p;
            }
        }
        p = path.join(wf, c);
        if (fs.existsSync(p)) {
            return p;
        }
    }

    return null;
}
