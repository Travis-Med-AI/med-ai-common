import { StudyType } from "../enums";

export interface StudyViewModel {
    id: number;

    orthancStudyId: string;

    patientId: string;

    type: StudyType;

    modality: string;

    failed: boolean;

    lastUpdate: number;
}