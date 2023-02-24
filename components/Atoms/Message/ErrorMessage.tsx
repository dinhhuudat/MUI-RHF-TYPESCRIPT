import FormHelperText from '@mui/material/FormHelperText'

type TErrorMessageProps = {
   errorMessage: string
}

const ErrorMessage: React.FC<typeof FormHelperText & TErrorMessageProps> = ({
   errorMessage,
}) => {
   return (
      <>
         <FormHelperText>{errorMessage} </FormHelperText>
      </>
   )
}

export default ErrorMessage
