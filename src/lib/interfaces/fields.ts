interface IField {
    label: string,
}

interface IInput extends IField {
    type: string,
}

interface ISelect extends IField {
    options: string[],
}

interface ICheckbox extends IField {

}

export { IInput, ISelect, ICheckbox  }