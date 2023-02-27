import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'

type TCustomCheckboxProps = {
   label: string
} & CheckboxProps

const CustomCheckbox: React.FC<TCustomCheckboxProps> = ({
   label,
   ...restProps
}) => {
   return (
      <FormControlLabel label={label} control={<Checkbox {...restProps} />} />
   )
}

export default CustomCheckbox
