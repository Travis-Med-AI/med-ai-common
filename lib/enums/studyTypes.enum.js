"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docStudyType = exports.StudyType = void 0;
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
};
