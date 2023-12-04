import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import type { AbilityItemPF2e, FeatPF2e, SpellPF2e } from "types/pf2e/src/module/item/index.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import type { FeatSheetPF2e } from "types/pf2e/src/module/item/feat/sheet.ts"
import { RangeData } from "types/pf2e/src/module/item/types.ts"
import { AbilitySystemData, SelfEffectReference } from "./data.ts";
import type { ActionSheetPF2e } from "./sheet.ts";
interface SourceWithActionData {
    system: {
        actionType: AbilitySystemData["actionType"];
        actions: AbilitySystemData["actions"];
    };
}
interface SourceWithFrequencyData {
    system: {
        frequency?: AbilitySystemData["frequency"];
    };
}
/** Pre-update helper to ensure actionType and actions are in sync with each other */
declare function normalizeActionChangeData(document: SourceWithActionData, changed: DeepPartial<SourceWithActionData>): void;
/** Adds sheet listeners for modifying frequency */
declare function activateActionSheetListeners(item: ItemPF2e & SourceWithFrequencyData, html: HTMLElement): void;
/** Create data for the "self-applied effect" drop zone on an ability or feat sheet. */
declare function createSelfEffectSheetData(data: SelfEffectReference | null): SelfEffectSheetReference | null;
interface SelfEffectSheetReference extends SelfEffectReference {
    id: string | null;
    type: string | null;
    pack: string | null;
}
/** Save data from an effect item dropped on an ability or feat sheet. */
declare function handleSelfEffectDrop(sheet: ActionSheetPF2e | FeatSheetPF2e, event: ElementDragEvent): Promise<void>;
declare function createActionRangeLabel(range: Maybe<RangeData>): string | null;
/**  Add the holy/unholy trait to sanctified actions and spells if the owning actor is also holy/unholy */
declare function processSanctification(item: AbilityItemPF2e<ActorPF2e> | FeatPF2e<ActorPF2e> | SpellPF2e<ActorPF2e>): void;
export { activateActionSheetListeners, createActionRangeLabel, createSelfEffectSheetData, handleSelfEffectDrop, normalizeActionChangeData, processSanctification, };
