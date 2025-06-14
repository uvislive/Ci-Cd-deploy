// import AddUser from './view/User-Form/AddUser'
import { Box, Card } from '@mui/material'
import EditUser from './view/User-Form/EditUser'

function App() {

  return (
    <>
    <Box sx={{width:"100%",height:"100vh",display:'flex',justifyContent:'center'}}>
     <Box maxWidth="lg" >

      <Box sx={{width:"100%",height:"100vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Card sx={{padding:"20px",border:'2px solid grey'}}>
      {/* <AddUser /> */}
      <EditUser/>
      </Card>
      
      </Box>
     </Box>
     </Box>
    </>
  )
}

export default App
