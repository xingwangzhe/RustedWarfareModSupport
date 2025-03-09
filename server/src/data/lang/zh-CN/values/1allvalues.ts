import { CompletionItem } from 'vscode-languageserver';
import { EVENTS } from './events';
import { BOOL } from './bool';
import { FUNCTION } from './function';
import { LOGICBBOOLEAN } from './logicbBoolean';
import { OTHERPARAMETERS } from './otherParameters';
import { SPAWNPROJECTILE } from './spawnProjectile';
import { SPAWNUNIT } from './spawnUnit';
import { UNITPROPERTY } from './unitProperty';
import { UNITREF } from './unitRef';

export const ALLVALUES:Record<string, CompletionItem[]>={
	BOOL,
	EVENTS,
	FUNCTION,
	LOGICBBOOLEAN,
	OTHERPARAMETERS,
	SPAWNPROJECTILE,
	SPAWNUNIT,
	UNITPROPERTY,
	UNITREF
};