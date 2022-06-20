import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Container className="mx-auto m-5"
                sx={{
                    boxShadow: "0 0 10px",
                    padding: "25px",
                    borderRadius: "10px"
                }}>
                <Box className='contact'
                    padding={3}
                    boxShadow={'0 0 10px'}
                    borderRadius={'10px'}
                    display={'flex'}
                    textAlign={'center'}
                >
                    <Box className='address' width={'50%'}>
                        <Typography variant='h5' className='text-decoration-underline'>
                            Address
                        </Typography>

                        <Typography variant='h4'>Our Store</Typography>
                        <Typography variant='h6'>Kathmandu, Nepal</Typography>
                        <Typography variant='h6'>01-44242424</Typography>
                        <Typography variant='body1'>info@ourstore.com</Typography>
                    </Box>
                    <Box className='contact-form' width={'50%'}>
                        <Typography variant='h5' className='text-decoration-underline'>
                            Contact Form
                        </Typography>
                        <TextField
                        className='mb-2'
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="medium"
                            padding="10px"
                            height='150px'
                            marginBottom = "5px"
                            fullWidth />

                        <TextField
                        className='mb-2'
                            id="outlined-basic"
                            label="Subject"
                            variant="outlined"
                            size="medium"
                            padding="10px"
                            height='150px'
                            marginBottom = "5px"
                            fullWidth />

                        <TextField
                        className='mb-2'
                            id="outlined-basic"
                            label="Body"
                            variant="outlined"
                            size="medium"
                            padding="10px"
                            height='150px'
                            fullWidth />

                            <Button variant='contained' fullWidth>
                                Submit
                            </Button>

                    </Box>
                </Box>
<hr/>

                <Box className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14128.005399225685!2d85.3239595!3d27.7172446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1654165748555!5m2!1sen!2snp" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Container>
        </>
    )
}

export default Contact