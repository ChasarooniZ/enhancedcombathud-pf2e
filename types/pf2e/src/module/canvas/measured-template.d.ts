import { MeasuredTemplateDocumentPF2e } from "types/pf2e/src/module/scene/measured-template-document.ts"
import { TemplateLayerPF2e } from "./index.ts";
import { ScenePF2e } from "types/pf2e/src/module/scene/index.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
declare class MeasuredTemplatePF2e<TDocument extends MeasuredTemplateDocumentPF2e<ScenePF2e | null> = MeasuredTemplateDocumentPF2e<ScenePF2e | null>> extends MeasuredTemplate<TDocument> {
    #private;
    /** Static data for the currently active preview template */
    static currentPreview: PreviewData | null;
    get type(): MeasuredTemplateType;
    highlightGrid(): void;
    drawPreview(): Promise<MeasuredTemplatePF2e | null>;
    /** Overriden to ensure preview canvas events are removed (if any) on destruction */
    destroy(options?: boolean | PIXI.IDestroyOptions): void;
    applyRenderFlags(): void;
    get item(): ItemPF2e<ActorPF2e> | null;
}
interface PreviewData {
    resolve: (value: MeasuredTemplatePF2e | null) => void;
    placed: boolean;
}
interface MeasuredTemplatePF2e<TDocument extends MeasuredTemplateDocumentPF2e<ScenePF2e | null> = MeasuredTemplateDocumentPF2e<ScenePF2e | null>> extends MeasuredTemplate<TDocument> {
    get layer(): TemplateLayerPF2e<this>;
}
export { MeasuredTemplatePF2e };
