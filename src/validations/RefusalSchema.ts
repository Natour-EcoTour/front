import * as yup from 'yup';

export const RefusalSchema = yup.object().shape({
    reason:
        yup.string().required('Motivo da recusa é obrigatório'),
});