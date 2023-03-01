import { TextFieldProps } from '@mui/material'

type TTextfields = 'email' | 'password'

type TSignUpTextfieldOptions = {
   [key in TTextfields]: TextFieldProps & { type: 'textfield' }
}

type TFieldOptions = TSignUpTextfieldOptions

export const fieldOptions: TFieldOptions = {
   email: { type: 'textfield', label: 'email' },
   password: { type: 'textfield', label: 'password' },
}
