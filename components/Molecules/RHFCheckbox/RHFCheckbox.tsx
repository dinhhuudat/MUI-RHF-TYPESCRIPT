import { CheckboxProps } from '@mui/material/Checkbox'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CustomCheckbox from '../../Atoms/CustomCheckbox/CustomCheckbox'

type TRHFCheckboxProps = {
   name: string
   label: string
   options: any
} & CheckboxProps

const RHFCheckbox: React.FC<TRHFCheckboxProps> = ({ name, ...restProps }) => {
   const { control } = useFormContext()
   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { ref, ...restField } }) => {
            return (
               <CustomCheckbox
                  sx={{ mb: '1.5rem' }}
                  {...restField}
                  {...restProps}
               ></CustomCheckbox>
            )
         }}
      />
   )
}

export default RHFCheckbox
