import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Remove the extra `base` subproperty of labeled values on NPCs */
export declare class Migration672RemoveNPCBaseProperties extends MigrationBase {
    static version: number;
    private removeBase;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
    updateItem(itemSource: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void>;
}
