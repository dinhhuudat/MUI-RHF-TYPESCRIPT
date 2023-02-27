import {
   AppBar,
   Box,
   Button,
   IconButton,
   Stack,
   Toolbar,
   Typography,
} from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const StyledAppContainer = styled(Box)({
   backgroundColor: 'aliceblue',
   width: '100vw',
   height: '100vh',
})

type TApptemplateProps = {
   children: React.ReactNode
}
const navItems = [
   { name: 'Login', path: '/' },
   { name: 'Sign Up', path: '/signUp' },
]

const AppTemplate: React.FC<TApptemplateProps> = ({ children }) => {
   return (
      <StyledAppContainer>
         <AppBar component="nav">
            <Toolbar>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2, display: { sm: 'none' } }}
               ></IconButton>
               <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  MUI
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                     <Link key={item.name} href={item.path}>
                        <Button sx={{ color: '#fff' }}>{item.name}</Button>
                     </Link>
                  ))}
               </Box>
            </Toolbar>
         </AppBar>
         <Stack position="fixed" top={64} alignItems="center" width="100vw">
            {children}
         </Stack>
      </StyledAppContainer>
   )
}

export default AppTemplate
