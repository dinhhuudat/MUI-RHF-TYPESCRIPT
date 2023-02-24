import { Box } from '@mui/material'
import { styled } from '@mui/system'

const StyledAppContainer = styled(Box)({
   backgroundColor: 'aliceblue',
   width: '100vw',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
})

type TApptemplateProps = {
   children: React.ReactNode
}

const AppTemplate: React.FC<TApptemplateProps> = ({ children }) => {
   return <StyledAppContainer>{children}</StyledAppContainer>
}

export default AppTemplate
