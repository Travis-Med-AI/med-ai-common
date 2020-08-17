"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docModality = exports.Modality = void 0;
var Modality;
(function (Modality) {
    Modality["CT"] = "CT";
    Modality["C_XRAY"] = "CR";
})(Modality = exports.Modality || (exports.Modality = {}));
exports.docModality = {
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
