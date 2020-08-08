import { EvaluationStatus } from "../enums/evaluationStatus.enum";
import { ModelViewModel } from "./model.vm";

export interface StudyEvalVM {
    id: number;
    patient: string;
    modelOutput: any;
    model: ModelViewModel
    status: EvaluationStatus
}