import {DocEnum} from "../interfaces/documentation"

export enum StudyType {
    abdXray = "Abd_Xray", 
    frontalCXR = "Frontal_CXR", 
    lateralCXR = "Lateral_CXR", 
    mskCXR = "MSK_Xray",
    dicom = "Dicom",
    headCT= 'Head_CT',
    CT = 'CT'
}

export const docStudyType: DocEnum = {
    typeString: 'StudyType',
    description: 'TODO',
    values: [
      {
        enum: StudyType.CT,
        description: 'TODO'
      },
      {
        enum: StudyType.abdXray,
        description: 'TODO'
      },
      {
        enum: StudyType.dicom,
        description: 'TODO'
      },
      {
        enum: StudyType.frontalCXR,
        description: 'TODO'
      },
      {
        enum: StudyType.headCT,
        description: 'TODO'
      },
      {
        enum: StudyType.lateralCXR,
        description: 'TODO'
      },
      {
        enum: StudyType.mskCXR,
        description: 'TODO'
      },
    ]
  }