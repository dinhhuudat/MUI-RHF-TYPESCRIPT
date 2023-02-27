import { Button, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { fieldOptions, TCheckboxFields, TSelectFields } from './fieldOptions'

type TOptionSelect = { value: string; label: string }
const COUNTRY_OPTIONS: TOptionSelect[] = [
   { value: '1', label: 'VIET NAM' },
   { value: '2', label: 'LAO' },
   { value: '3', label: 'CAMPUCHIA' },
]

const SEX_OPTIONS: TOptionSelect[] = [
   { value: '1', label: 'MALE' },
   { value: '2', label: 'FEMALE' },
]

const SignUp: React.FC = () => {
   const defaultValues = {
      email: '',
      password: '',
      country: '3',
   }

   const methods = useForm({ defaultValues: defaultValues })

   const onSubmit = (formValues: { email: string; password: string }) => {
      const value = JSON.stringify(formValues)
      window.alert(value)
   }

   return (
      <Stack className="SignUpForm__container">
         <Typography variant="h2">SIGN UP FORM</Typography>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
               <Stack>
                  {(
                     Object.keys(fieldOptions) as Array<
                        keyof typeof fieldOptions
                     >
                  ).map((fieldName) => {
                     const { Component, ...restOptions } =
                        fieldOptions[fieldName]
                     const options =
                        fieldName === 'country' ? COUNTRY_OPTIONS : []
                     return (
                        <Component
                           key={fieldName}
                           name={fieldName}
                           options={options}
                           {...restOptions}
                        />
                     )
                  })}
                  <Button variant="outlined" type="submit">
                     SIGN UP
                  </Button>
               </Stack>
            </form>
         </FormProvider>
      </Stack>
   )
}

export default SignUp
