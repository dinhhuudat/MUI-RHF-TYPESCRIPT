import { CheckboxProps, TextFieldProps } from '@mui/material'
import RHFCheckbox from '../../Molecules/RHFCheckbox/RHFCheckbox'
import RHFTextField from '../../Molecules/RHFTextField/RHFTextField'

export type TInputFields = 'email' | 'password' | 'country'
export type TSelectFields = 'country'
export type TCheckboxFields = 'sex'

type TSignUpTextfieldOptions = Record<
   TInputFields | TSelectFields,
   TextFieldProps & { Component: typeof RHFTextField; options?: any }
>
type TSignUpCheckboxOptions = Record<
   TCheckboxFields,
   CheckboxProps & {
      Component: typeof RHFCheckbox
      options?: any
      label: string
   }
>

type TFieldOptions = TSignUpTextfieldOptions & TSignUpCheckboxOptions

export const fieldOptions: TFieldOptions = {
   email: { Component: RHFTextField, label: 'email' },
   password: { Component: RHFTextField, label: 'password' },
   country: { Component: RHFTextField, label: 'country', select: true },
   sex: { Component: RHFCheckbox, label: 'sex' },
}
