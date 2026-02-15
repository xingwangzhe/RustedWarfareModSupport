import * as vscode from "vscode";

export function openImagePreview(imageUriString: string) {
  try {
    const panel = vscode.window.createWebviewPanel(
      "rwImagePreview",
      "Image Preview",
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        localResourceRoots: [],
      },
    );

    const imageUri = vscode.Uri.parse(imageUriString);
    const webviewUri = panel.webview.asWebviewUri(imageUri);

    panel.webview.html = getHtml(webviewUri.toString());
  } catch (e) {
    console.error("openImagePreview error", e);
  }
}

function getHtml(imageSrc: string): string {
  // simple HTML with mouse drag to zoom behavior
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin:0; background:#1e1e1e; display:flex; align-items:center; justify-content:center; height:100vh; }
    #container { position:relative; overflow:auto; }
    img { user-select:none; -webkit-user-drag:none; display:block; max-width:100%; height:auto; }
    .toolbar { position:fixed; top:8px; left:8px; z-index:999; }
    button { margin-right:6px; }
  </style>
</head>
<body>
  <div class="toolbar">
    <button id="reset">Reset</button>
    <span id="zoomLabel">1.00x</span>
  </div>
  <div id="container">
    <img id="img" src="${imageSrc}" />
  </div>
  <script>
    const img = document.getElementById('img');
    const zoomLabel = document.getElementById('zoomLabel');
    let scale = 1.0;
    let dragging = false;
    let startY = 0;
    let startScale = 1.0;

    function update() {
      img.style.transform = 'scale(' + scale + ')';
      img.style.transformOrigin = 'center center';
      zoomLabel.textContent = scale.toFixed(2) + 'x';
    }

    img.addEventListener('mousedown', (e) => {
      dragging = true;
      startY = e.clientY;
      startScale = scale;
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const dy = startY - e.clientY; // drag up to zoom in
      const delta = dy / 200; // sensitivity
      scale = Math.max(0.1, Math.round((startScale * (1 + delta)) * 100) / 100);
      update();
    });

    window.addEventListener('mouseup', () => {
      dragging = false;
    });

    document.getElementById('reset').addEventListener('click', () => {
      scale = 1.0; update();
    });

    // allow wheel to zoom as well
    img.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = -e.deltaY / 500; // sensitivity
      scale = Math.max(0.1, Math.round((scale * (1 + delta)) * 100) / 100);
      update();
    }, { passive: false });

    update();
  </script>
</body>
</html>`;
}
