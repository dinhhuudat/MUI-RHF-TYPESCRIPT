import { CheckboxProps } from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import CustomCheckbox from '../../Atoms/CustomCheckbox/CustomCheckbox'

type TRHFCheckboxProps = {
   name: string
   label: string
   options: any
} & Partial<CheckboxProps>

const RHFCheckbox: React.FC<TRHFCheckboxProps> = ({
   name,
   label,
   ...restProps
}) => {
   const { control, getValues } = useFormContext()
   return (
      <Controller
         control={control}
         name={name}
         render={({ field: { ref, value, onChange, ...restField } }) => {
            return (
               <FormControl component="fieldset" variant="standard">
                  <FormLabel component="legend">{label}</FormLabel>
                  <CustomCheckbox
                     sx={{ mb: '1.5rem' }}
                     RHFOnChange={onChange}
                     values={value || []}
                     {...restField}
                     {...restProps}
                  ></CustomCheckbox>
               </FormControl>
            )
         }}
      />
   )
}

export default RHFCheckbox
