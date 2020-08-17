"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docParams = void 0;
var studyTypes_enum_1 = require("../enums/studyTypes.enum");
var modality_enum_1 = require("../enums/modality.enum");
var modelInputs_enum_1 = require("../enums/modelInputs.enum");
var modelOutputs_enum_1 = require("../enums/modelOutputs.enum");
exports.docParams = [
    {
        name: 'tag',
        typeString: 'String',
        description: 'TODO',
        required: true
    },
    {
        name: 'displayName',
        typeString: 'String',
        description: 'TODO',
        required: true
    },
    {
        name: 'input',
        type: studyTypes_enum_1.StudyType,
        typeString: 'StudyType',
        description: 'TODO',
        required: true
    },
    {
        name: 'modality',
        typeString: 'Modality',
        type: modality_enum_1.Modality,
        description: 'TODO',
        required: true
    },
    {
        name: 'inputType',
        typeString: 'ModelInputs',
        type: modelInputs_enum_1.ModelInputs,
        description: 'TODO',
        required: true
    },
    {
        name: 'inputType',
        typeString: 'ModelOutputs',
        type: modelOutputs_enum_1.ModelOutputs,
        description: 'TODO',
        required: true
    },
    {
        name: 'hasImageOutput',
        typeString: 'boolean',
        description: 'TODO',
        required: true
    }
];
