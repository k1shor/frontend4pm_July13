import { Box, Typography } from '@mui/material'
import React from 'react'

const Blogs = () => {
    return (
        <>
            <Box className='blog-container' sx={{
                width: '100%',
                backgroundColor: 'primary.dark',
                padding: '20px'
            }}>
                <Box className='blog d-flex' sx={{
                    backgroundColor: 'primary.main',
                    borderRadius: '20px',
                    p: '20px',
                    '&:hover': {
                        backgroundColor: 'primary.light'
                    }
                }}>
                    <Box className='blog-content' sx={{
                        width: '80%',
                        paddingRight:'20px'

                    }}>
                        <Box className='blog-title'>
                            <Typography variant='h4' sx={{textDecoration:"underline", color:"gray",
                            '&:hover':{
                                color:"white",
                                cursor:"pointer"
                            }
                        }}>
                                Title
                            </Typography>
                        </Box>
                        <Box className='blog-text' sx={{
                            textAlign:'justify',
                            letterSpacing: '2px',
                            lineHeight: '25px'
                        }}>text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text text text texttexttext text text text text text  </Box>
                    </Box>
                    <Box className='blog-author' sx={{
                        borderLeft: 'solid', 
                        pl: '20px',
                        textAlign:'center', 
                        width:'20%'
                    }}>
                        <Box className="blogger-image mx-auto" sx={{
                            width:'90%',
                            height:'150px',
                            margin:'auto',
                            borderRadius: '50%',
                            backgroundColor:'white', 
                            overflow:'hidden'
                        }}>
                            <img src={'./mobile_img/realme.png'} sx={{
                                height:'100%',
                                width: '50px'
                            }}
                            
                                />
                        </Box>
                        <Box className='blogger-name' sx={{
                            textAlign:"right",
                            fontWeight:'bold'
                        }}>
                            Mr. Blogger
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Blogs