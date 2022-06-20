import React from 'react'
import Card from './Card'

const Product = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    <Card img={"./mobile_img/realme.png"} name={"Real Me"} desc={"Ream me phone, processor: Quadcore"}/>
                    <Card img={"./mobile_img/sam1.jpg"} name={"Samsung A22"}/>
                    <Card img={"./mobile_img/sam2.jpg"} name={"Samsung Galaxy"}/>
                
                    <Card img={"./mobile_img/realme.png"} name={"Real Me"}/>
                </div>
            </div>
        </>
    )
}

export default Product