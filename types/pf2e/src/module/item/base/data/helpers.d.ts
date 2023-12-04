import { ItemSystemData } from "./system.ts";
import { ItemSourcePF2e, MagicItemSource, PhysicalItemSource } from "./index.ts";
declare function isItemSystemData(data: unknown): data is ItemSystemData;
/** Checks if the given item data is a physical item with a quantity and other physical fields. */
declare function isPhysicalData(source: ItemSourcePF2e): source is PhysicalItemSource;
declare function isPhysicalData(source: PreCreate<ItemSourcePF2e>): source is PreCreate<PhysicalItemSource>;
declare function hasInvestedProperty(source: ItemSourcePF2e): source is MagicItemSource;
declare function isInventoryItem(type: string): boolean;
export { hasInvestedProperty, isInventoryItem, isItemSystemData, isPhysicalData };
