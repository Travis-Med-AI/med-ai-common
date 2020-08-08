import { ModelViewModel } from "./model.vm";
import { EvalJobStatus } from "../enums/evalJobStatus.enum";

export interface EvalJobViewModel {
    model: ModelViewModel
    status: EvalJobStatus
    endTime: number;
    lastRun: number;
}