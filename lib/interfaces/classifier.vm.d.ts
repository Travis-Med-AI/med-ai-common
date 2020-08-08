import { ModelViewModel } from "./model.vm";
export interface ClassifierViewModel {
    id: number;
    model: ModelViewModel;
    modality: string;
    lastRun: number;
}
