import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { CreatureTrait } from "types/pf2e/src/module/actor/creature/index.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { Rarity } from "types/pf2e/src/module/data.ts"
import { HeritageSource, HeritageSystemData } from "./data.ts";
declare class HeritagePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    get traits(): Set<CreatureTrait>;
    get rarity(): Rarity;
    get isVersatile(): boolean;
    /** Prepare a character's data derived from their heritage */
    prepareActorData(this: HeritagePF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
}
interface HeritagePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: HeritageSource;
    system: HeritageSystemData;
}
export { HeritagePF2e };
