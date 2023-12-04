import { ItemType } from "types/pf2e/src/module/item/base/data/index.ts"
import type { StringField } from "types/foundry/common/data/fields.d.ts";
import { RuleElementPF2e, RuleElementSchema } from "../index.ts";
import { ItemAlterationSchema } from "./alteration.ts";
declare class ItemAlterationRuleElement extends RuleElementPF2e<ItemAlterationRuleSchema> {
    #private;
    static defineSchema(): ItemAlterationRuleSchema;
    static validateJoint(data: SourceFromSchema<ItemAlterationRuleSchema>): void;
    onApplyActiveEffects(): void;
    preCreate({ tempItems }: RuleElementPF2e.PreCreateParams): Promise<void>;
}
interface ItemAlterationRuleElement extends RuleElementPF2e<ItemAlterationRuleSchema>, ModelPropsFromSchema<ItemAlterationRuleSchema> {
}
type ItemAlterationRuleSchema = RuleElementSchema & ItemAlterationSchema & {
    /** The type of items to alter */
    itemType: StringField<ItemType, ItemType, false, false, false>;
    /** As an alternative to specifying item types, an exact item ID can be provided */
    itemId: StringField<string, string, false, false, false>;
};
export { ItemAlterationRuleElement };
