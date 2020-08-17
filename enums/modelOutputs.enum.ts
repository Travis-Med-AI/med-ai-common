import { DocEnum } from "../interfaces/documentation";

export enum ModelOutputs {
  classProbabilities = "Class_Probabilities",
  mask = "Mask",
  studyType = "Study_Type",
}

export const docModelOutputs: DocEnum = {
  typeString: "ModelOutputs",
  description: "TODO",
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
