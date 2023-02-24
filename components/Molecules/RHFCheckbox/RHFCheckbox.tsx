import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'

type TRHFCheckboxProps = {
   type: 'checkbox'
   label: string
   message: string
} & CheckboxProps

const RHFCheckbox: React.FC<TRHFCheckboxProps> = ({
   message,
   checked,
   label,
}) => {
   return (
      <FormControlLabel
         label={label}
         control={<Checkbox checked={checked} />}
      />
   )
}

export default RHFCheckbox
