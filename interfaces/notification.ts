import { Notifications } from "../enums";

export interface NotificationMessage {
    type: Notifications;
    message: string;
    id: number;
}