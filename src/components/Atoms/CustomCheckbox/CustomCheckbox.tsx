import { FormGroup } from '@mui/material'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'

type TCustomCheckboxProps = {
   options: { value: string; text: string }[]
   values: string[]
   RHFOnChange: (item: any) => void
} & CheckboxProps

const CustomCheckbox: React.FC<TCustomCheckboxProps> = ({
   values,
   options,
   RHFOnChange,
   ...restProps
}) => {
   const handleChanged = (item: any, checked: boolean) => {
      if (checked) {
         return RHFOnChange([item])
      }
      if (!checked) {
         const newValues = values.filter((v) => v !== item)
         return RHFOnChange(newValues)
      }
   }

   return (
      <FormGroup>
         {options.map((option) => (
            <FormControlLabel
               key={option.value}
               value={option.value}
               label={option.text}
               sx={{ display: 'flex', alignItems: 'center' }}
               control={
                  <Checkbox
                     style={{ marginBottom: 0 }}
                     checked={values.includes(option.value)}
                     onChange={(_, checked) =>
                        handleChanged(option.value, checked)
                     }
                     {...restProps}
                  />
               }
            />
         ))}
      </FormGroup>
   )
}

export default CustomCheckbox
