interface IFieldParams {
    sizeAndSpacingClasses?: string, 
    label: string, 
    type?: string, 
    options?: Array<string>,
    required?: boolean
}

interface IFieldInput {
    component: string, 
    value: string,
    params: IFieldParams
}

interface IFieldsTypePropertiesInputs {
    [key: string] : IFieldInput[]
}

export { IFieldInput, IFieldsTypePropertiesInputs }