export interface IStockScan {
    id: number;
    name: string;
    tag: string;
    color: string;
    criteria: ICriteria[]
}

export interface ICriteria {
        type: CriteriaTypeEnum;
        text: string;
        variable: ICriteriaVariable
}

export interface ICriteriaVariable {
    [keyName: string]: {
        type: CriteriaVariableTypeEnum;
        values?: number[];
        default_value: number;
        max_value?: number;
        min_value?: number;
        parameter_name?: "period"
        study_type?: "cci"
    }
}

export enum CriteriaTypeEnum {
    PLAIN_TEXT = "plain_text",
    VARIABLE = "variable",
}

export enum CriteriaVariableTypeEnum {
    VALUE = "value",
    INDICATOR = "indicator"
}