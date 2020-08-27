import { EvaluationStatus } from "../enums/evaluationStatus.enum";
export interface StudyEvalVM {
    id: number;
    modelOutput: any;
    status: EvaluationStatus;
    imgOutputPath: string;
    lastUpdate: number;
}
