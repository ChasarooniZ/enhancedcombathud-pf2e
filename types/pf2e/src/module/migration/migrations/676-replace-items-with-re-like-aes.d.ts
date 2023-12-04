import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Replace items containing FlatModifier `ActiveEffect`s with latest ones without */
export declare class Migration676ReplaceItemsWithRELikeAEs extends MigrationBase {
    static version: number;
    /** The feats Toughness and Mountain's Stoutness */
    private toughnessPromise;
    private stoutnessPromise;
    /** The familiar ability Tough */
    private toughPromise;
    private replaceItem;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}