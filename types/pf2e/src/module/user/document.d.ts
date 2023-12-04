import type { ActorPF2e } from "types/pf2e/src/module/actor/base.ts"
import type { TokenPF2e } from "types/pf2e/src/module/canvas/index.ts"
import type { ScenePF2e, TokenDocumentPF2e } from "types/pf2e/src/module/scene/index.ts"
import { UserFlagsPF2e, UserSourcePF2e } from "./data.ts";
declare class UserPF2e extends User<ActorPF2e<null>> {
    prepareData(): void;
    /** Set user settings defaults */
    prepareBaseData(): void;
    get settings(): Readonly<UserSettingsPF2e>;
    /** Alternative to calling `#updateTokenTargets()` with no argument or an empty array */
    clearTargets(): void;
    protected _onUpdate(changed: DeepPartial<this["_source"]>, options: DocumentUpdateContext<null>, userId: string): void;
}
interface UserPF2e extends User<ActorPF2e<null>> {
    targets: Set<TokenPF2e<TokenDocumentPF2e<ScenePF2e>>>;
    flags: UserFlagsPF2e;
    readonly _source: UserSourcePF2e;
}
interface UserSettingsPF2e {
    showEffectPanel: boolean;
    showCheckDialogs: boolean;
    showDamageDialogs: boolean;
    monochromeDarkvision: boolean;
    searchPackContents: boolean;
}
export { UserPF2e, type UserSettingsPF2e };
