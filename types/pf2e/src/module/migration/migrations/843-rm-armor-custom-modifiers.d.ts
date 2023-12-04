import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Remove custom modifiers in the "armor" statistic */
export declare class Migration843RMArmorCustomModifiers extends MigrationBase {
    static version: number;
    updateActor(source: ActorSourcePF2e): Promise<void>;
}
