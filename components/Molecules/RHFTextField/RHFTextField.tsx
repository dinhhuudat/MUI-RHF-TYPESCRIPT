import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CustomTextField from '../../Atoms/CustomTextField/CustomTextField'

type TRHFTextField = {
   name: string
} & TextFieldProps

const RHFTextField: React.FC<TRHFTextField> = ({ name, ...otherProps }) => {
   const {
      control,
      formState: { errors },
   } = useFormContext()
   return (
      <>
         <Controller
            control={control}
            name={name}
            render={({ field: { ref, ...restField } }) => {
               return (
                  <CustomTextField
                     {...restField}
                     {...otherProps}
                     variant="outlined"
                     sx={{ mb: '1.5rem' }}
                     error={!!errors[name]}
                     helperText={
                        errors[name]
                           ? (errors[name]?.message as unknown as string)
                           : ''
                     }
                  ></CustomTextField>
               )
            }}
         />
      </>
   )
}

export default RHFTextField
