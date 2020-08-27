import { RoleViewModel } from "./role.vm";

export interface UserViewModel {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    roles: RoleViewModel[]
}