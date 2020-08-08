import { StudyType } from "../enums/studyTypes.enum";
import { Modality } from "../enums/modality.enum";
import { ModelInputs } from "../enums/modelInputs.enum";
import { ModelOutputs } from "../enums/modelOutputs.enum";

export interface ModelManifestItem {
    tag: string;
    displayName:string
    input: StudyType;
    modality: Modality;
    inputType: ModelInputs;
    output: ModelOutputs;
    hasImageOutput: boolean;
}