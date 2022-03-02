import { ModelViewModel } from "./model.vm";
import { EvalJobStatus } from "../enums/evalJobStatus.enum";

export interface EvalJobViewModel {
    id: number
    model: ModelViewModel
    running: boolean
    cpu: boolean
}