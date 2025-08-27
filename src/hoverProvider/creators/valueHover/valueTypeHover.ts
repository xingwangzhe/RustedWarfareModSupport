import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getExtensionId } from '../../../extension';
import { findMatchingValueItem, createValueItemHover, createValueTypeGeneralHover } from './utils';

/**
 * 创建基于值类型的悬停信息
 * @param propertyType 属性类型
 * @param value 值
 * @returns 悬停信息
 */
export function createValueTypeHover(propertyType: string, value: string): vscode.Hover | null {
    if (!propertyType || !value) {
        return null;
    }

    const trimmedValue = value.trim();
    if (!trimmedValue) {
        return null;
    }

    try {
        // 获取扩展的实际路径
        const extension = vscode.extensions.getExtension(getExtensionId());
        if (!extension) {
            console.error('Cannot find extension');
            return null;
        }

        const extensionPath = extension.extensionPath;
        const valueDir = path.join(extensionPath, 'data', 'value');

        // 根据属性类型映射到值类型文件
        const valueTypeFile = mapPropertyTypeToValueFile(propertyType);
        if (!valueTypeFile) {
            return null;
        }

        const valuePath = path.join(valueDir, `${valueTypeFile}.json`);
        if (!fs.existsSync(valuePath)) {
            return null;
        }

        const valueData = JSON.parse(fs.readFileSync(valuePath, 'utf8'));

        // 在值类型文件中查找匹配的参数
        const matchedItem = findMatchingValueItem(valueData, trimmedValue);
        if (matchedItem) {
            return createValueItemHover(matchedItem, valueData);
        }

        // 如果没有找到精确匹配，显示类型的一般信息
        return createValueTypeGeneralHover(valueData);

    } catch (error) {
        console.error('Error reading value type file:', error);
        return null;
    }
}

/**
 * 将属性类型映射到值类型文件
 * @param propertyType 属性类型
 * @returns 值类型文件名
 */
function mapPropertyTypeToValueFile(propertyType: string): string | null {
    const typeMapping: { [key: string]: string } = {
        'price': 'Prices_Resources',
        'int / price': 'Prices_Resources',
        'string(s)': 'logicboolean', // 可能需要调整
        'logicBoolean': 'logicboolean',
        'LogicBoolean': 'logicboolean',
        'bool': 'logicboolean',
        'spawnProjectiles': 'spawnProjectiles',
        'spawnUnits': 'spawnUnits',
        'movementTypes': 'logicboolean', // 可能需要专门的文件
        'sound(s)': 'logicboolean', // 可能需要专门的文件
        'file(s) (ini)': 'logicboolean', // 可能需要专门的文件
        'preset effects': 'logicboolean', // 可能需要专门的文件
        'effect(s) ref': 'logicboolean', // 可能需要专门的文件
        'turret ref': 'logicboolean', // 可能需要专门的文件
        'ints': 'logicboolean', // 可能需要专门的文件
        'LocaleString': 'logicboolean', // 可能需要专门的文件
        'float': 'logicboolean', // 基础类型
        'int': 'logicboolean', // 基础类型
        'string': 'logicboolean' // 基础类型
    };

    // 直接匹配
    if (typeMapping[propertyType]) {
        return typeMapping[propertyType];
    }

    // 模糊匹配
    for (const [key, value] of Object.entries(typeMapping)) {
        if (propertyType.toLowerCase().includes(key.toLowerCase())) {
            return value;
        }
    }

    return null;
}
