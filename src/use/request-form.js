import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
    const {isSubmitting, handleSubmit} = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const {value: fio, errorMessage: fError, handleBlur: fBlur} = useField(
        'fio',
        yup.string()
            .trim()
            .required('Введите имя')
    )
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Телефон не может быть пустым')
    )
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
        'amount',
        yup.number()
            .required('Введите сумму')
            .min(0, 'Сумма не может быть иеньше 0')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmitting,
        onSubmit,
        fio,
        fError,
        fBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur
    }
}