import { ModelOutputs } from "../enums/modelOutputs.enum";
import { StudyType } from "../enums/studyTypes.enum";
import { ModelInputs } from "../enums/modelInputs.enum";
import { Modality } from "../enums/modality.enum";
export interface ModelViewModel {
    id?: number;
    image: string;
    input: StudyType;
    inputType: ModelInputs;
    output: ModelOutputs;
    hasImageOutput: boolean;
    modality: Modality;
}
