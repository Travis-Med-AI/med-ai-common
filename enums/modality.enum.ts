import { DocEnum } from "../interfaces/documentation";

export enum Modality {
  CT = "CT",
  C_XRAY = "CR",
  XRAY = "DX",
  MRI = "MR"
}

export const docModality: DocEnum = {
  typeString: "Modality",
  description: "Describes the imaging modality that the model accepts.",
  values: [
    {
      enum: Modality.CT,
      description: "CT Scan",
    },
    {
      enum: Modality.C_XRAY,
      description: "Chest XRAY",
    },
  ],
};
