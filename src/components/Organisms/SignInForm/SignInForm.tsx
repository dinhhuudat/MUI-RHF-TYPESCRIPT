import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import RHFTextField from '../../Molecules/RHFTextField/RHFTextField'
import { fieldOptions } from './fieldOptions'

const SignIn: React.FC = () => {
   const defaultValues = {
      email: '',
      password: '',
   }

   const schemaForm = z.object({
      email: z.string().min(1).email(),
      password: z.string().min(1),
   })

   const methods = useForm({
      defaultValues: defaultValues,
      resolver: zodResolver(schemaForm),
   })

   const a=
   const b=

   const onSubmit = (formValues: { email: string; password: string }) => {
      const value = JSON.stringify(formValues)
      window.alert(value)
   }

   return (
      <Stack className="SignInForm__container">
         <Typography variant="h2">LOGIN FORM</Typography>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
               <Stack>
                  {(
                     Object.keys(fieldOptions) as Array<
                        keyof typeof fieldOptions
                     >
                  ).map((fieldName) => {
                     const { label, ...restOptions } = fieldOptions[fieldName]
                     return (
                        <RHFTextField
                           key={fieldName}
                           label={label}
                           name={fieldName}
                           {...restOptions}
                        />
                     )
                  })}
                  <Button variant="outlined" type="submit">
                     Login
                  </Button>
               </Stack>
            </form>
         </FormProvider>
      </Stack>
   )
}

export default SignIn
