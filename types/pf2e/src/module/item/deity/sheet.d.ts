/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { SkillAbbreviation } from "types/pf2e/src/module/actor/creature/data.ts"
import { DeityPF2e } from "types/pf2e/src/module/item/index.ts"
import { ItemSheetDataPF2e, ItemSheetPF2e } from "types/pf2e/src/module/item/base/sheet/base.ts"
import { SheetOptions } from "types/pf2e/src/module/sheet/helpers.ts"
import { DeitySanctification } from "./data.ts";
export declare class DeitySheetPF2e extends ItemSheetPF2e<DeityPF2e> {
    static get defaultOptions(): DocumentSheetOptions;
    getData(options?: Partial<DocumentSheetOptions>): Promise<DeitySheetData>;
    activateListeners($html: JQuery): void;
    _onDrop(event: ElementDragEvent): Promise<void>;
    /** Foundry inflexibly considers checkboxes to be booleans: set back to a string tuple for Divine Font */
    _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface DeitySheetData extends ItemSheetDataPF2e<DeityPF2e> {
    sanctifications: {
        value: DeitySanctification | null;
        label: string;
    }[];
    skills: Record<SkillAbbreviation, string>;
    divineFonts: SheetOptions;
    spells: SpellBrief[];
}
interface SpellBrief {
    uuid: ItemUUID;
    level: number;
    name: string;
    img: ImageFilePath;
}
export {};
