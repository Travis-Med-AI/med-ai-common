export interface ExperimentStats {
    total: number;
    accuracy: number;
    sensitivity: number;
    specificity: number;
    ppv: number;
    npv: number;
    tp: number;
    fp: number;
    tn: number;
    fn: number;
}

export interface ExperimentStatsViewModel {
    experimentId: number;
    keys: {
        [key: string]: ExperimentStats
    }
}
