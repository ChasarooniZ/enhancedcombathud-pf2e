import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ConsumablePF2e, SpellcastingEntryPF2e } from "types/pf2e/src/module/item/index.ts"
import { SpellCollection } from "types/pf2e/src/module/item/spellcasting-entry/collection.ts"
import { SpellcastingEntrySource } from "types/pf2e/src/module/item/spellcasting-entry/index.ts"
import { RitualSpellcasting } from "types/pf2e/src/module/item/spellcasting-entry/rituals.ts"
import { BaseSpellcastingEntry } from "types/pf2e/src/module/item/spellcasting-entry/types.ts"
import { Statistic } from "types/pf2e/src/module/system/statistic/statistic.ts"
import { DelegatedCollection } from "types/pf2e/src/util/index.ts"
export declare class ActorSpellcasting<TActor extends ActorPF2e> extends DelegatedCollection<BaseSpellcastingEntry<TActor>> {
    readonly actor: TActor;
    /** The base casting proficiency, which spellcasting build off of */
    base: Statistic;
    /** All available spell lists on this actor */
    collections: Collection<SpellCollection<TActor, BaseSpellcastingEntry<TActor>>>;
    constructor(actor: TActor, entries: BaseSpellcastingEntry<TActor>[]);
    /** Returns a list of entries pre-filtered to SpellcastingEntryPF2e */
    get regular(): SpellcastingEntryPF2e<TActor>[];
    /** Get this actor's ritual casting ability */
    get ritual(): RitualSpellcasting<TActor> | null;
    /**
     * All spellcasting entries that count as prepared/spontaneous, which qualify as a
     * full fledged spellcasting feature for wands and scrolls.
     */
    get spellcastingFeatures(): SpellcastingEntryPF2e<TActor>[];
    canCastConsumable(item: ConsumablePF2e): boolean;
    refocus(options?: {
        all?: boolean;
    }): {
        "system.resources.focus.value": number;
    } | null;
    /**
     * Recharges all spellcasting entries based on the type of entry it is
     * @todo Support a timespan property of some sort and handle 1/hour innate spells
     */
    recharge(): {
        itemUpdates: ((Record<string, unknown> | Partial<SpellcastingEntrySource>) & {
            _id: string;
        })[];
        actorUpdates: {
            "system.resources.focus.value": number;
        } | null;
    };
}
