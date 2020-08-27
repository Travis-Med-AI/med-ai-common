import { EvaluationStatus } from "../enums/evaluationStatus.enum";
import { ModelViewModel } from "./model.vm";
import { StudyViewModel } from "./study.vm";

export interface StudyEvalVM {
    id: number;
    modelOutput: any;
    status: EvaluationStatus; 
    imgOutputPath: string;
    lastUpdate: number;
}