import * as yup from 'yup';

export const UpdatePasswordSchema = yup.object().shape({
  old_password:
    yup.string().required('Preencha os campos necessários'),
  new_password:
    yup.string().required('Preencha os campos necessários'),
  confirm_password:
    yup.string().oneOf([yup.ref('new_password')], 'As senhas devem corresponder').required('Preencha os campos necessários'),
});