import * as vscode from "vscode";

const CONFIG_SECTION = "rustedwarfaremodsupport";
const CONFIG_KEY = "imageZoom";
const DEFAULT_ZOOM = 1.0;
const STEP = 0.25;

export function getZoom(): number {
  const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
  const v = config.get<number>(CONFIG_KEY, DEFAULT_ZOOM);
  if (!v || typeof v !== "number" || isNaN(v) || v <= 0) {
    return DEFAULT_ZOOM;
  }
  return v;
}

export async function setZoom(value: number): Promise<void> {
  const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
  await config.update(CONFIG_KEY, value, vscode.ConfigurationTarget.Workspace);
}

export async function increaseZoom(): Promise<number> {
  const z = getZoom();
  const nz = Math.round((z + STEP) * 100) / 100;
  await setZoom(nz);
  return nz;
}

export async function decreaseZoom(): Promise<number> {
  const z = getZoom();
  const nz = Math.max(0.25, Math.round((z - STEP) * 100) / 100);
  await setZoom(nz);
  return nz;
}

export async function resetZoom(): Promise<number> {
  await setZoom(DEFAULT_ZOOM);
  return DEFAULT_ZOOM;
}
