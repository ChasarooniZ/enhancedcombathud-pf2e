import { ActorPF2e, PartyPF2e } from "types/pf2e/src/module/actor/index.ts"
import { FeatGroup } from "types/pf2e/src/module/actor/character/feats.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { ActionCost, Frequency } from "types/pf2e/src/module/item/base/data/index.ts"
import { UserPF2e } from "types/pf2e/src/module/user/index.ts"
import { CampaignFeatureSource, CampaignFeatureSystemData } from "./data.ts";
import { BehaviorType, KingmakerCategory, KingmakerTrait } from "./types.ts";
declare class CampaignFeaturePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    group: FeatGroup<PartyPF2e, CampaignFeaturePF2e> | null;
    grants: CampaignFeaturePF2e[];
    behavior: BehaviorType;
    levelLabel: string;
    get category(): KingmakerCategory;
    /** Returns the level if the feature type supports it */
    get level(): number | null;
    get traits(): Set<KingmakerTrait>;
    get actionCost(): ActionCost | null;
    get frequency(): Frequency | null;
    get isAction(): boolean;
    get isFeature(): boolean;
    get isFeat(): boolean;
    prepareBaseData(): void;
    /** Set a self roll option for this feat(ure). Skip for actions */
    prepareActorData(this: CampaignFeaturePF2e<ActorPF2e>): void;
    prepareSiblingData(): void;
    /** Generate a list of strings for use in predication */
    getRollOptions(prefix?: string | null): string[];
    protected _preCreate(data: this["_source"], options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
    protected _preUpdate(changed: DeepPartial<CampaignFeatureSource>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
}
interface CampaignFeaturePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: CampaignFeatureSource;
    system: CampaignFeatureSystemData;
}
export { CampaignFeaturePF2e };
