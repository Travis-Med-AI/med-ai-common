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
        description: 'CT Scan'
      },
      {
        enum: StudyType.abdXray,
        description: 'Abdominal Xray'
      },
      {
        enum: StudyType.dicom,
        description: 'DICOM'
      },
      {
        enum: StudyType.frontalCXR,
        description: 'Frontal Chest Xray'
      },
      {
        enum: StudyType.headCT,
        description: 'Head CT Scan'
      },
      {
        enum: StudyType.lateralCXR,
        description: 'Lateral Chest Xray'
      },
      {
        enum: StudyType.mskCXR,
        description: 'Musculoskeletal Chest Xray'
      },
    ]
  }