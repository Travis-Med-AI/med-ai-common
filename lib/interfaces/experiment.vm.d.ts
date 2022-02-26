import { StudyType } from "../enums";
import { ExperimentStatus } from "../enums/experimentStatus.enum";
export interface ExperimentViewModel {
    id?: number;
    name: string;
    createdDate: Date;
    status: ExperimentStatus;
    type: StudyType;
    progress?: number;
}
