/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { RawModifier, StatisticModifier } from "types/pf2e/src/module/actor/modifiers.ts"
import { RollSubstitution } from "types/pf2e/src/module/rules/synthetics.ts"
import { CheckRollContext } from "./types.ts";
/**
 * Dialog for excluding certain modifiers before rolling a check.
 * @category Other
 */
export declare class CheckModifiersDialog extends Application {
    #private;
    /** The check which is being edited. */
    check: StatisticModifier;
    /** Relevant context for this roll, like roll options. */
    context: CheckRollContext;
    /** A Promise resolve method */
    resolve: (value: boolean) => void;
    /** Has the promise been resolved? */
    isResolved: boolean;
    constructor(check: StatisticModifier, resolve: (value: boolean) => void, context?: CheckRollContext);
    static get defaultOptions(): ApplicationOptions;
    getData(): Promise<CheckDialogData>;
    activateListeners($html: JQuery): void;
    close(options?: {
        force?: boolean;
    }): Promise<void>;
    /** Overriden to add some additional first-render behavior */
    protected _injectHTML($html: JQuery<HTMLElement>): void;
}
interface CheckDialogData {
    appId: string;
    modifiers: RawModifier[];
    totalModifier: number;
    rollModes: Record<RollMode, string>;
    rollMode: RollMode | "roll" | undefined;
    showCheckDialogs: boolean;
    substitutions: RollSubstitutionDialogData[];
    fortune: boolean;
    none: boolean;
    misfortune: boolean;
}
interface RollSubstitutionDialogData extends RollSubstitution {
    toggleable: boolean;
}
export {};