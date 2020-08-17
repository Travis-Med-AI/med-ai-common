import { StudyType } from "../enums/studyTypes.enum";
import { Modality } from "../enums/modality.enum";
import { ModelInputs } from "../enums/modelInputs.enum";
import { ModelOutputs } from "../enums/modelOutputs.enum";
import { DocParameter } from "./documentation"

export interface ModelManifestItem {
    tag: string;
    displayName:string
    input: StudyType;
    modality: Modality;
    inputType: ModelInputs;
    output: ModelOutputs;
    hasImageOutput: boolean;
}
export const docParams: Array<DocParameter> = [
  {
    name: 'tag',
    typeString: 'String',
    description: 'TODO',
    required: true
  },
  {
    name: 'displayName',
    typeString: 'String',
    description: 'TODO',
    required: true
  },
  {
    name: 'input',
    type: StudyType,
    typeString: 'StudyType',
    description: 'TODO',
    required: true
  },
  {
    name: 'modality',
    typeString: 'Modality',
    type: Modality,
    description: 'TODO',
    required: true
  },
  {
    name: 'inputType',
    typeString: 'ModelInputs',
    type: ModelInputs,
    description: 'TODO',
    required: true
  },
  {
    name: 'inputType',
    typeString: 'ModelOutputs',
    type: ModelOutputs,
    description: 'TODO',
    required: true
  },
  {
    name: 'hasImageOutput',
    typeString: 'boolean',
    description: 'TODO',
    required: true
  }
]