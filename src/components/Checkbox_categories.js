import React, { useState, useEffect } from 'react'
import { getCategories } from '../api/categoryAPI'

const Checkbox_categories = ({handleFilters}) => {
    const [categories, setCategories] = useState([])
    const [checked, setChecked] = useState([])

    const handleChange = e => {
        const newChecked = [...checked]
        const found = newChecked.findIndex(item=>item===e.target.value)
// returns index if already checked, -1 if not checked
        if(found === -1){
            newChecked.push(e.target.value)
        }
        else{
            newChecked.splice(found,1)
        }
        setChecked(newChecked)
        // console.log(newChecked)
        handleFilters(newChecked, 'category')
    }

    useEffect(() => {
        getCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])

    return (
        <>
            {
                categories.map((category, i) => {
                    return <div className="form-check my-1" key={i}>
                            <input className="form-check-input mt-1 me-2" type="checkbox" id={`flexCheckDefault${i}`} onChange={handleChange} value={category._id}/>
                                <label className="form-check-label" htmlFor={`flexCheckDefault${i}`}>
                                    {category.category_name}
                                </label>
                        </div>
                    
                })
            }
        </>
    )
}

export default Checkbox_categories