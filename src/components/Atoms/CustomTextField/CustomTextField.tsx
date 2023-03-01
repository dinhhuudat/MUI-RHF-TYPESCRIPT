import { FormControl, MenuItem, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

type TRHFCustomTextFieldProps = {
   options?: { value: string; label: string }[]
} & TextFieldProps

const CustomTextField: React.FC<TRHFCustomTextFieldProps> = ({
   options,
   ...otherProps
}) => {
   return (
      <FormControl>
         <TextField variant="outlined" {...otherProps}>
            {options?.map((option) => (
               <MenuItem key={option.value} value={option.value}>
                  {option.label}
               </MenuItem>
            ))}
         </TextField>
      </FormControl>
   )
}

export default CustomTextField
