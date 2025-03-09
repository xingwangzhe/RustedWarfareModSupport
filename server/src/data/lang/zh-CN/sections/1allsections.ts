import { CompletionItem } from 'vscode-languageserver';
import { ACTION } from './action';
import { AI } from './ai';
import { ANIMATION } from './animation';
import { ATTACHMENT } from './attachment';
import { ATTACK } from './attack';
import { CANBUILD } from './canBuild';
import { CORE } from './core';
import { EFFECT } from './effect';
import { GRAPHICS } from './graphics';
import { LEG } from './leg';
import { MOVEMENT } from './movement';
import { PLACEMENTRULE } from './placementRule';
import { PROJECTILE } from './projectile';
import { RESOURCE } from './resource';
import { TURRET } from './turret';


export const ALLSECTIONS: Record<string, CompletionItem[]> ={
	ACTION,
	AI,
	ANIMATION,
	ATTACHMENT,
	ATTACK,
	CANBUILD,
	CORE,
	EFFECT,
	GRAPHICS,
	LEG,
	MOVEMENT,
	PLACEMENTRULE,
	PROJECTILE,
	RESOURCE,
	TURRET
}; 