import { Weakness } from "types/pf2e/src/module/actor/data/iwr.ts"
import { WeaknessType } from "types/pf2e/src/module/actor/types.ts"
import type { StrictArrayField } from "types/pf2e/src/module/system/schema-data-fields.ts"
import { ResolvableValueField } from "../data.ts";
import { IWRException, IWRExceptionField, IWRRuleElement, IWRRuleSchema } from "./base.ts";
/** @category RuleElement */
declare class WeaknessRuleElement extends IWRRuleElement<WeaknessRuleSchema> {
    static defineSchema(): WeaknessRuleSchema;
    static get dictionary(): Record<WeaknessType, string>;
    get property(): Weakness[];
    getIWR(value: number): Weakness[];
}
interface WeaknessRuleElement extends IWRRuleElement<WeaknessRuleSchema>, ModelPropsFromSchema<WeaknessRuleSchema> {
    type: WeaknessType[];
    exceptions: IWRException<WeaknessType>[];
}
type WeaknessRuleSchema = Omit<IWRRuleSchema, "exceptions"> & {
    value: ResolvableValueField<true, false, false>;
    exceptions: StrictArrayField<IWRExceptionField>;
};
export { WeaknessRuleElement };
