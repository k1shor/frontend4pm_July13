import React from 'react'

const Card = (item) => {
    return (
        <>
        
            <div className="col mb-3">
                <div className="card">
                    <img src={`${item.img}`} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.desc}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card