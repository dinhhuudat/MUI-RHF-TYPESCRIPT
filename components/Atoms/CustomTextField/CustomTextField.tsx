import {
   FormControl,
   FormHelperText,
   FormLabel,
   TextField,
   TextFieldProps,
} from '@mui/material'
import React from 'react'

type TRHFCustomTextFieldProps = {
   name: string
} & TextFieldProps

const CustomTextField: React.FC<TRHFCustomTextFieldProps> = ({
   name,
   label,
   helperText,
   error,
   ...otherProps
}) => {
   return (
      <FormControl>
         <FormLabel>{label}</FormLabel>
         <TextField {...otherProps} variant="outlined"></TextField>
         {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
   )
}

export default CustomTextField
