import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import RHFTextField from '../../Molecules/RHFTextField/RHFTextField'

const SignIn: React.FC = () => {
   const defaultValues = {
      email: 'dinhhuudat112323',
      password: '',
   }

   const methods = useForm({ defaultValues: defaultValues })

   const onSubmit = (formValues: { email: string; password: string }) => {
      console.log('formValues', formValues)
   }

   return (
      <Stack className="SignInForm__container">
         <Typography variant="h2">LOGIN FORM</Typography>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
               <RHFTextField label="email" name="email" />
               <Button type="submit"> submit</Button>
            </form>
         </FormProvider>
      </Stack>
   )
}

export default SignIn
