import { DocEnum } from "../interfaces/documentation";

export enum ModelOutputs {
  classProbabilities = "Class_Probabilities",
  mask = "Mask",
  studyType = "Study_Type",
}

export const docModelOutputs: DocEnum = {
  typeString: "ModelOutputs",
  description: "The data format that should be expected as an output from the scan model.",
  values: [
    {
      enum: ModelOutputs.classProbabilities,
      description: "TODO",
    },
    {
      enum: ModelOutputs.mask,
      description: "TODO",
    },
    {
      enum: ModelOutputs.studyType,
      description: "TODO",
    },
  ],
};
