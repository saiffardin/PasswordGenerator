import * as Yup from 'yup';
import {FORM} from './form';

export const PasswordSchema = Yup.object().shape({
  [FORM.PASSWORD_LENGTH]: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});
