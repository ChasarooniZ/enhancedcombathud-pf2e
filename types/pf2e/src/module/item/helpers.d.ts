import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemType } from "./base/data/index.ts";
import { PhysicalItemPF2e } from "./physical/document.ts";
import { ItemInstances } from "./types.ts";
/** Determine in a type-safe way whether an `ItemPF2e` or `ItemSourcePF2e` is among certain types */
declare function itemIsOfType<TParent extends ActorPF2e | null, TType extends ItemType>(item: {
    type: string;
    effects: Collection<object> | object[];
    flags: DocumentFlags;
}, ...types: TType[]): item is ItemInstances<TParent>[TType] | ItemInstances<TParent>[TType]["_source"];
declare function itemIsOfType<TParent extends ActorPF2e | null>(item: {
    type: string;
    effects: Collection<object> | object[];
    flags: DocumentFlags;
}, type: "physical"): item is PhysicalItemPF2e<TParent> | PhysicalItemPF2e["_source"];
declare function itemIsOfType<TParent extends ActorPF2e | null, TType extends "physical" | ItemType>(item: {
    type: string;
    effects: Collection<object> | object[];
    flags: DocumentFlags;
}, ...types: TType[]): item is TType extends "physical" ? PhysicalItemPF2e<TParent> | PhysicalItemPF2e<TParent>["_source"] : TType extends ItemType ? ItemInstances<TParent>[TType] | ItemInstances<TParent>[TType]["_source"] : never;
/** Create a "reduced" item name; that is, one without an "Effect:" or similar prefix */
declare function reduceItemName(label: string): string;
export { itemIsOfType, reduceItemName };
