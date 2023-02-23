import { Button } from '@mui/material'
import { useState } from 'react'

export default function Home() {
   const [initValue, setInitValue] = useState<any>()
   const setValue = () => {
      setInitValue({ name: 'name', sdt: 'sdt', b: undefined, c: null })
   }
   return (
      <>
         <Button onClick={setValue}>Set default</Button>
      </>
   )
}
