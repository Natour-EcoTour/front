import * as yup from 'yup';

export const UpdatePasswordSchema = yup.object().shape({
  currentPassword:
    yup.string().required('Preencha os campos necessários'),
  newPassword:
    yup.string().required('Preencha os campos necessários'),
  confirmPassword:
    yup.string().oneOf([yup.ref('newPassword')], 'As senhas devem corresponder').required('Preencha os campos necessários'),
});