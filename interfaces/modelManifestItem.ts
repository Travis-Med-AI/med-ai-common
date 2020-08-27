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
    description: 'The tag name of your docker image repository',
    required: true
  },
  {
    name: 'displayName',
    typeString: 'String',
    description: 'The name of your model that will be displayed in travis-med-ai.',
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
    description: 'The image file format that your model accepts.',
    required: true
  },
  {
    name: 'outputType',
    typeString: 'ModelOutputs',
    type: ModelOutputs,
    description: 'The output format of your file.',
    required: true
  },
  {
    name: 'hasImageOutput',
    typeString: 'boolean',
    description: 'Specifies whether your model outputs a masked image after finishing image processing.',
    required: true
  }
]