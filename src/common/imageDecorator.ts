import * as vscode from "vscode";

/**
 * 图片装饰器工厂 - 只处理图片相关的装饰
 */
export class ImageDecoratorFactory {
  private static decorators = new Map<
    string,
    vscode.TextEditorDecorationType
  >();

  static createImageDecorator(
    typeName: string
  ): vscode.TextEditorDecorationType {
    if (ImageDecoratorFactory.decorators.has(typeName)) {
      return ImageDecoratorFactory.decorators.get(typeName)!;
    }

    let decorator: vscode.TextEditorDecorationType;

    // 只为 image 类型的值显示图片图标
    if (
      typeName &&
      typeName.toLowerCase().includes("image") &&
      typeName.toLowerCase().endsWith("_value")
    ) {
      decorator = vscode.window.createTextEditorDecorationType({
        after: {
          contentText: "    🖼️",
          color: "#95a5a6",
        },
      });
    } else {
      // 其他类型返回空装饰器
      decorator = vscode.window.createTextEditorDecorationType({});
    }

    ImageDecoratorFactory.decorators.set(typeName, decorator);
    return decorator;
  }

  static disposeAll() {
    ImageDecoratorFactory.decorators.forEach((decorator) => {
      decorator.dispose();
    });
    ImageDecoratorFactory.decorators.clear();
  }
}
