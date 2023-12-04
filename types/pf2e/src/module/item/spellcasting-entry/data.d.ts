import { AttributeString } from "types/pf2e/src/module/actor/types.ts"
import { BaseItemSourcePF2e, ItemSystemData, ItemSystemSource, OtherTagsOnly } from "types/pf2e/src/module/item/base/data/system.ts"
import { MagicTradition } from "types/pf2e/src/module/item/spell/types.ts"
import { OneToTen, ZeroToEleven, ZeroToFour } from "types/pf2e/src/module/data.ts"
import type { RollNotePF2e } from "types/pf2e/src/module/notes.ts"
import { SpellcastingCategory } from "./types.ts";
type SlotKey = `slot${ZeroToEleven}`;
type SpellcastingEntrySource = BaseItemSourcePF2e<"spellcastingEntry", SpellcastingEntrySystemSource>;
interface SpellAttackRollModifier {
    breakdown: string;
    notes: RollNotePF2e[];
    roll: Function;
    value: number;
}
interface SpellDifficultyClass {
    breakdown: string;
    notes: RollNotePF2e[];
    value: number;
}
interface SpellPrepData {
    id: string | null;
    expended?: boolean;
    name?: string;
    prepared?: boolean;
}
interface SpellSlotData {
    prepared: Record<number, SpellPrepData>;
    value: number;
    max: number;
}
interface SpellcastingEntrySystemSource extends ItemSystemSource {
    traits: OtherTagsOnly;
    ability: {
        value: AttributeString | "";
    };
    spelldc: {
        value: number;
        dc: number;
    };
    tradition: {
        value: MagicTradition | "";
    };
    prepared: SpellCollectionTypeSource;
    showSlotlessLevels: {
        value: boolean;
    };
    proficiency: {
        slug: string;
        value: ZeroToFour;
    };
    slots: Record<SlotKey, SpellSlotData>;
    autoHeightenLevel: {
        value: OneToTen | null;
    };
    level?: never;
}
interface SpellCollectionTypeSource {
    value: SpellcastingCategory;
    flexible?: boolean;
    validItems?: "scroll" | "" | null;
}
interface SpellcastingEntrySystemData extends SpellcastingEntrySystemSource, Omit<ItemSystemData, "level" | "traits"> {
    prepared: SpellCollectionTypeData;
}
interface SpellCollectionTypeData extends SpellCollectionTypeSource {
    flexible: boolean;
    validItems: "scroll" | null;
}
export type { SlotKey, SpellAttackRollModifier, SpellDifficultyClass, SpellcastingEntrySource, SpellcastingEntrySystemData, SpellcastingEntrySystemSource, };
