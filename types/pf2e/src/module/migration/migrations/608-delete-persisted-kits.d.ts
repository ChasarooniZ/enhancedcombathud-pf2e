import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
/** Unbreak actor sheets that have kit items in their inventories */
export declare class Migration608DeletePersistedKits extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e, actorData?: ActorSourcePF2e): Promise<void>;
}
