import { EvaluationStatus } from "../enums/evaluationStatus.enum";
import { ModelViewModel } from "./model.vm";
import { StudyViewModel } from "./study.vm";
import { ModelOutput } from "./modelOutput";

export interface StudyEvalVM {
    id: number;
    modelOutput: ModelOutput;
    status: EvaluationStatus; 
    imgOutputPath: string;
    lastUpdate: number;
    logs?: string[];
    orthancId: string;
    study: StudyViewModel;
    model: ModelViewModel;
}