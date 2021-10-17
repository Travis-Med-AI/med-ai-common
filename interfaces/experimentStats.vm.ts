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

export interface ExperimentStatsViewModel {
    experimentId: number;
    keys: {
        [key: string]: ExperimentStats
    }
}
