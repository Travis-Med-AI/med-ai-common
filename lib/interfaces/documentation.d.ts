export interface DocEnum {
    typeString: string;
    description: string;
    values: Array<DocEnumValue>;
}
export interface DocEnumValue {
    enum: any;
    description: string;
}
export interface DocParameter {
    name: string;
    type?: any;
    typeString: string;
    description: string;
    required: boolean;
}
