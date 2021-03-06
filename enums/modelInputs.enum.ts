import { DocEnum } from "../interfaces/documentation";

export enum ModelInputs {
  DICOM = "DICOM",
  PNG = "PNG",
}

export const docModelInputs: DocEnum = {
  typeString: "ModelInputs",
  description: "The file format that the model takes as an input.",
  values: [
    {
      enum: ModelInputs.DICOM,
      description: ".dicom file format.",
    },
    {
      enum: ModelInputs.PNG,
      description: ".png file format.",
    },
  ],
};
