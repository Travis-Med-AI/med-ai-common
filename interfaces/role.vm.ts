import { ROLES } from "../enums/roles.enum";

export interface RoleViewModel {
    id?: number;

    name: ROLES;
    
    description: string;
}
