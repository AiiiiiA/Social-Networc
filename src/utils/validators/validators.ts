export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    }

    return 'Поле обязательно для заполнения';
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value && value.length > maxLength) {
        return `Максимум ${maxLength} символов`
    }
    return undefined;
}