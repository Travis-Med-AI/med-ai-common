export interface ExperimentStats {
    total: number;
    accuracy: number;
    fpr: number;
    tpr: number;
    sensitivity: number;
    specificity: number;
    ppv: number;
    npv: number;
}

export interface ExperimentStatusViewModel {
    experimentId: number;
    keys: {
        [key: string]: ExperimentStats
    }
}
