import { ModelViewModel } from "./model.vm";
export interface EvalJobViewModel {
    id: number;
    model: ModelViewModel;
    running: boolean;
}
