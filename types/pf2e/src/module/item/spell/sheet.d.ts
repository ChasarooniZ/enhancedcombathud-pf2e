/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { TraitTagifyEntry } from "types/pf2e/src/module/sheet/helpers.ts"
import { DamageCategoryUnique, DamageType } from "types/pf2e/src/module/system/damage/types.ts"
import { ItemSheetDataPF2e, ItemSheetPF2e } from "../base/sheet/base.ts";
import type { SpellPF2e, SpellSystemData, SpellSystemSource } from "./index.ts";
export declare class SpellSheetPF2e extends ItemSheetPF2e<SpellPF2e> {
    #private;
    get id(): string;
    protected get validTraits(): Record<string, string> | null;
    getData(options?: Partial<DocumentSheetOptions>): Promise<SpellSheetData>;
    static get defaultOptions(): DocumentSheetOptions;
    get title(): string;
    activateListeners($html: JQuery): void;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
    protected _onDragStart(event: ElementDragEvent): void;
    protected _onDrop(event: ElementDragEvent): Promise<void>;
    private getAvailableHeightenLevels;
}
interface SpellSheetData extends ItemSheetDataPF2e<SpellPF2e> {
    isCantrip: boolean;
    isFocusSpell: boolean;
    isRitual: boolean;
    passiveDefense: string | null;
    isVariant: boolean;
    variants: {
        name: string;
        id: string;
        sort: number;
        actions: string;
    }[];
    materials: typeof CONFIG.PF2E.materialDamageEffects;
    damageTypes: Record<DamageType, string>;
    damageSubtypes: Pick<typeof CONFIG.PF2E.damageCategories, DamageCategoryUnique>;
    areaSizes: typeof CONFIG.PF2E.areaSizes;
    areaTypes: typeof CONFIG.PF2E.areaTypes;
    heightenIntervals: number[];
    heightenOverlays: SpellSheetHeightenOverlayData[];
    canHeighten: boolean;
}
interface SpellSheetOverlayData {
    id: string | null;
    /** Base path to the property, dot delimited */
    base: string;
    /** Base path to the spell override data, dot delimited. Currently this is the same as base */
    dataPath: string;
    level: number | null;
    type: "heighten" | "variant";
    system: Partial<SpellSystemSource> | null;
}
interface SpellSheetHeightenOverlayData extends SpellSheetOverlayData {
    system: Partial<SpellSystemSource>;
    heightenLevels: number[];
    missing: {
        key: keyof SpellSystemData;
        label: string;
    }[];
    traits?: TraitTagifyEntry[] | null;
}
export {};
