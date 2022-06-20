import { Typography, Button, Box } from '@mui/material'
import React from 'react'


const MUIHome = () => {
  return (
    <>
    <Typography variant='h1' color='info'>
        This is heading.
    </Typography>
    <Typography variant='button'>BUTTON TEXT</Typography>

    <Button variant='text'>CLICK ME</Button>
    <Button variant='outlined' color='secondary' padding='5'>CLICK ME</Button>
    <Button variant='contained' color='error'>CLICK ME</Button>
    <Button variant='contained' color='success'>CLICK ME</Button>
    <Button variant='contained' color='info'>CLICK ME</Button>
    <Button variant='contained' color='warning' >CLICK ME</Button>
    <Button variant='contained' color='primary' size='medium'>CLICK ME</Button>
    <Button variant='contained' color='warning' size='large'>CLICK ME</Button>
    <Button variant='contained' color='warning' size='small'>CLICK ME</Button>
    <Button variant='contained' p={'3'} size={'500'} disableElevation >CLICK ME</Button>
    <Button variant='contained' sx = {{color:"red",backgroundColor:"yellow", padding:'25px'}}>CLICK ME</Button>

<Box sx={{backgroundColor:'red', marginLeft:'25px', width: '50%'}}>HELLO </Box>

    </>
  )
}

export default MUIHome