import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import s from './FormControls.module.css'
import { FC } from 'react';

type FormControlType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}

const FormControl: FC<FormControlType> = ({ meta: { touched, error }, children }) => {

    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) =>{
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}></textarea>
    </FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const { input, meta,  ...restProps } = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}></input>
    </FormControl>
}