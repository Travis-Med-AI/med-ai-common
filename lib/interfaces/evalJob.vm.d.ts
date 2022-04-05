import { ModelViewModel } from "./model.vm";
export interface EvalJobViewModel {
    id: number;
    model: ModelViewModel;
    running: boolean;
    cpu: boolean;
    replicas: number;
    delete_orthanc: boolean;
}
