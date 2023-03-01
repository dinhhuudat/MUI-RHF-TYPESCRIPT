import { TextFieldProps } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CustomTextField from '../../Atoms/CustomTextField/CustomTextField'

type TRHFTextField = {
   name: string
   options?: { value: string; label: string }[]
} & Partial<TextFieldProps>

const RHFTextField: React.FC<TRHFTextField> = ({ name, ...restProps }) => {
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
                     variant="outlined"
                     sx={{ mb: '1.5rem' }}
                     error={!!errors[name]}
                     helperText={
                        errors[name]
                           ? (errors[name]?.message as unknown as string)
                           : ''
                     }
                     {...restField}
                     {...restProps}
                  ></CustomTextField>
               )
            }}
         />
      </>
   )
}

export default RHFTextField
