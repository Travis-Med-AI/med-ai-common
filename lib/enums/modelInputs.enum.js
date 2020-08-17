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
