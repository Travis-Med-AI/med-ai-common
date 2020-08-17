import { StudyType } from "../enums/studyTypes.enum";
import { Modality } from "../enums/modality.enum";
import { ModelInputs } from "../enums/modelInputs.enum";
import { ModelOutputs } from "../enums/modelOutputs.enum";
import { DocParameter } from "./documentation";
export interface ModelManifestItem {
    tag: string;
    displayName: string;
    input: StudyType;
    modality: Modality;
    inputType: ModelInputs;
    output: ModelOutputs;
    hasImageOutput: boolean;
}
export declare const docParams: Array<DocParameter>;
