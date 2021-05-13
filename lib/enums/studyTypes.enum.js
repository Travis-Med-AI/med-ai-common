"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudyType;
(function (StudyType) {
    StudyType["abdXray"] = "Abd_Xray";
    StudyType["frontalCXR"] = "Frontal_CXR";
    StudyType["lateralCXR"] = "Lateral_CXR";
    StudyType["mskCXR"] = "MSK_Xray";
    StudyType["dicom"] = "Dicom";
    StudyType["headCT"] = "Head_CT";
    StudyType["CT"] = "CT";
})(StudyType = exports.StudyType || (exports.StudyType = {}));
exports.docStudyType = {
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
};
