import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { fieldOptions } from './fieldOptions'

type TOptionSelect = { value: string; label: string }
type TOptionCheckbox = { value: string; text: string }

const COUNTRY_OPTIONS: TOptionSelect[] = [
   { value: '1', label: 'VIET NAM' },
   { value: '2', label: 'LAO' },
   { value: '3', label: 'CAMPUCHIA' },
]

const SEX_OPTIONS: TOptionCheckbox[] = [
   { value: '1', text: 'MALE' },
   { value: '2', text: 'FEMALE' },
]

const getOptions: Record<string, Array<TOptionSelect | TOptionCheckbox>> = {
   country: COUNTRY_OPTIONS,
   sex: SEX_OPTIONS,
}

const SignUp: React.FC = () => {
   const defaultValues = {
      email: '',
      password: '',
      country: '3',
      sex: '1',
   }

   const schemaForm = z.object({
      email: z.string().min(1).email(),
      password: z.string().min(1),
      country: z.string(),
      sex: z.string(),
   })

   const methods = useForm({
      defaultValues: defaultValues,
      resolver: zodResolver(schemaForm),
   })

   const onSubmit = (formValues: { email: string; password: string }) => {
      console.log('submit')
      const value = JSON.stringify(formValues)
      window.alert(value)
   }

   const onReset = () => {
      const { reset } = methods
      reset()
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
                     const options = getOptions[fieldName]
                        ? getOptions[fieldName]
                        : []
                     return (
                        // @ts-ignore
                        <Component
                           key={fieldName}
                           name={fieldName}
                           options={options}
                           {...restOptions}
                        />
                     )
                  })}
                  <Stack gap={2} direction="row" justifyContent="flex-end">
                     <Button variant="outlined" onClick={onReset}>
                        RESET
                     </Button>
                     <Button variant="outlined" type="submit">
                        SIGN UP
                     </Button>
                  </Stack>
               </Stack>
            </form>
         </FormProvider>
      </Stack>
   )
}

export default SignUp
