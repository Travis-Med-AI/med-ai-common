import { DocEnum } from "../interfaces/documentation";

export enum Modality {
  CT = "CT",
  C_XRAY = "CR",
}

export const docModality: DocEnum = {
  typeString: "Modality",
  description: "TODO",
  values: [
    {
      enum: Modality.CT,
      description: "TODO",
    },
    {
      enum: Modality.C_XRAY,
      description: "TODO",
    },
  ],
};
