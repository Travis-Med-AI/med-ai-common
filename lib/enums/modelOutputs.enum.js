"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docModelOutputs = exports.ModelOutputs = void 0;
var ModelOutputs;
(function (ModelOutputs) {
    ModelOutputs["classProbabilities"] = "Class_Probabilities";
    ModelOutputs["mask"] = "Mask";
    ModelOutputs["studyType"] = "Study_Type";
})(ModelOutputs = exports.ModelOutputs || (exports.ModelOutputs = {}));
exports.docModelOutputs = {
    typeString: "ModelOutputs",
    description: "The data format that should be expected as an output from the scan model.",
    values: [
        {
            enum: ModelOutputs.classProbabilities,
            description: "TODO",
        },
        {
            enum: ModelOutputs.mask,
            description: "TODO",
        },
        {
            enum: ModelOutputs.studyType,
            description: "TODO",
        },
    ],
};
