import { SkillActionOptions } from "../index.ts";
import { SingleCheckAction } from "types/pf2e/src/module/actor/actions/index.ts"
declare function reposition(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { reposition as legacy, action };
