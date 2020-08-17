import { DocEnum } from "../interfaces/documentation";

export enum ModelInputs {
  DICOM = "DICOM",
  PNG = "PNG",
}

export const docModelInputs: DocEnum = {
  typeString: "ModelInputs",
  description: "TODO",
  values: [
    {
      enum: ModelInputs.DICOM,
      description: "TODO",
    },
    {
      enum: ModelInputs.PNG,
      description: "TODO",
    },
  ],
};
