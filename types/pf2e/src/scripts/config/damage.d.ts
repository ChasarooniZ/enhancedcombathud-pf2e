import { DamageCategoryUnique, DamageType } from "types/pf2e/src/module/system/damage/types.ts"
declare const damageCategoriesUnique: Record<DamageCategoryUnique, string>;
declare const materialDamageEffects: Pick<Record<"abysium" | "adamantine" | "darkwood" | "djezet" | "inubrix" | "mithral" | "noqual" | "orichalcum" | "siccatite" | "silver" | "cold-iron" | "dragonhide" | "grisantian-pelt" | "keep-stone" | "peachwood" | "sisterstone" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "warpglass", string>, "abysium" | "adamantine" | "darkwood" | "djezet" | "inubrix" | "mithral" | "noqual" | "orichalcum" | "siccatite" | "silver" | "cold-iron" | "keep-stone" | "peachwood" | "sisterstone-dusk" | "sisterstone-scarlet" | "sovereign-steel" | "warpglass">;
declare const damageCategories: {
    alignment: string;
    energy: string;
    physical: string;
    abysium: string;
    adamantine: string;
    darkwood: string;
    djezet: string;
    inubrix: string;
    mithral: string;
    noqual: string;
    orichalcum: string;
    siccatite: string;
    silver: string;
    "cold-iron": string;
    "keep-stone": string;
    peachwood: string;
    "sisterstone-dusk": string;
    "sisterstone-scarlet": string;
    "sovereign-steel": string;
    warpglass: string;
    precision: string;
    splash: string;
    persistent: string;
};
declare const physicalDamageTypes: {
    bleed: string;
    bludgeoning: string;
    piercing: string;
    slashing: string;
};
declare const damageTypes: Record<DamageType, string>;
declare const damageRollFlavors: Record<"acid" | "bleed" | "bludgeoning" | "cold" | "electricity" | "fire" | "force" | "mental" | "piercing" | "poison" | "slashing" | "sonic" | "spirit" | "vitality" | "void" | "untyped", string>;
export { damageCategories, damageCategoriesUnique, damageRollFlavors, damageTypes, materialDamageEffects, physicalDamageTypes, };
