import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getExtensionId } from '../extension';

/**
 * 加载节数据
 * @returns 节数据数组
 */
export function loadSectionsData(): any[] {
    try {
        const extension = vscode.extensions.getExtension(getExtensionId());
        if (!extension) {
            console.error('Cannot find extension');
            return [];
        }

        const extensionPath = extension.extensionPath;
        const sectionsPath = path.join(extensionPath, 'data', 'sections.json');
        const sectionsData = JSON.parse(fs.readFileSync(sectionsPath, 'utf8'));
        return sectionsData.data || [];
    } catch (error) {
        console.error('Error reading sections.json:', error);
        return [];
    }
}

/**
 * 根据名称查找节
 * @param sectionName 节名称
 * @returns 节对象或null
 */
export function findSectionByName(sectionName: string): any | null {
    const sections = loadSectionsData();
    return sections.find((s: any) => s.name === sectionName) || null;
}
