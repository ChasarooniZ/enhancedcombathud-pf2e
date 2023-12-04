import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ModifierPF2e } from "types/pf2e/src/module/actor/modifiers.ts"
import type { AbilityItemPF2e, MeleePF2e, WeaponPF2e } from "types/pf2e/src/module/item/index.ts"
import type { CreaturePF2e } from "./document.ts";
/** A static class of helper functions for applying automation for certain weapon traits on attack rolls */
declare class AttackTraitHelpers {
    protected static getLabel(traitOrTag: string): string;
    protected static getUnannotatedTrait(trait: string): string;
    static createAttackModifiers({ item }: CreateAttackModifiersParams): ModifierPF2e[];
}
interface CreateAttackModifiersParams {
    item: AbilityItemPF2e<ActorPF2e> | WeaponPF2e<ActorPF2e> | MeleePF2e<ActorPF2e>;
}
/** Set immunities for creatures with traits call for them */
declare function setImmunitiesFromTraits(actor: CreaturePF2e): void;
declare function imposeEncumberedCondition(actor: CreaturePF2e): void;
export { AttackTraitHelpers, imposeEncumberedCondition, setImmunitiesFromTraits };
