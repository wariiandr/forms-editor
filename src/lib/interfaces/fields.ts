interface Field {
    readonly id: string,
    label: string,
}

export default interface Input extends Field {
    type: string,
}

export default interface Select extends Field {
    options: string[],
}

export default interface Checkbox extends Field {

}