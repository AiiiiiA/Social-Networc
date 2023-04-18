export const required = value => {
    if (value) {
        return undefined
    }

    return 'Пустой текст';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Максимум ${maxLength} символов`
    }
    return undefined;
}