import { EvaluationStatus } from "../enums/evaluationStatus.enum";
import { StudyViewModel } from "./study.vm";
export interface StudyEvalVM {
    id: number;
    modelOutput: any;
    status: EvaluationStatus;
    imgOutputPath: string;
    lastUpdate: number;
    logs?: string[];
    orthancId: string;
    study: StudyViewModel;
}
