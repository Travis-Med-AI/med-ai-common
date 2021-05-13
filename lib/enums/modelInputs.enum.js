"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docModelInputs = exports.ModelInputs = void 0;
var ModelInputs;
(function (ModelInputs) {
    ModelInputs["DICOM"] = "DICOM";
    ModelInputs["PNG"] = "PNG";
})(ModelInputs = exports.ModelInputs || (exports.ModelInputs = {}));
exports.docModelInputs = {
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
