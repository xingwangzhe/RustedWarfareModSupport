/**
 * Hover功能的工具函数
 */

export class HoverUtils {
    /**
     * 获取节的基本名称
     * @param name 节名称
     * @returns 基本节名称
     */
    public static getBaseSectionName(name: string): string {
        let baseName = name;

        // 处理带下划线的节名称，如 turret_NAME, projectile_NAME 等
        if (name.includes("_")) {
            baseName = name.substring(0, name.indexOf("_"));
        }

        // 特殊处理 leg_ 和 arm_ 类型
        if (name.startsWith("leg_")) {
            baseName = "leg";
        } else if (name.startsWith("arm_")) {
            baseName = "arm";
        }

        // 特殊处理 spawnUnits:LIST 和 spawnProjectiles:LIST 类型
        if (name.startsWith("spawnUnits:")) {
            baseName = "spawnUnits";
        } else if (name.startsWith("spawnProjectiles:")) {
            baseName = "spawnProjectiles";
        }

        // 特殊处理 action_ 和 hiddenAction_ 类型
        if (name.startsWith("action_") || name.startsWith("hiddenAction_")) {
            baseName = "action";
        }

        // 特殊处理 Prices/Resources 类型
        if (name === "Prices/Resources") {
            baseName = "prices";
        }

        if (name.startsWith('global_resource')) {
            baseName = 'global_resource';
        }

        if (name.startsWith('canBuild')) {
            baseName = 'canBuild';
        }

        return baseName;
    }

    /**
     * 从悬停内容中提取属性类型
     * @param hover 悬停对象
     * @returns 属性类型
     */
    public static extractPropertyType(hover: any): string {
        if (!hover || !hover.contents || hover.contents.length === 0) {
            return '';
        }

        const content = hover.contents[0];
        let text = '';
        if (content && typeof content === 'object' && 'value' in content) {
            text = content.value;
        } else if (typeof content === 'string') {
            text = content;
        }

        // 尽量宽松地匹配反引号中的类型信息，避免依赖本地化的标签文字
        const backtickMatch = text.match(/`([^`]+)`/);
        if (backtickMatch) {
            return backtickMatch[1];
        }

        return '';
    }
}
