import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Blog() {
    const [Blgg, setBlgg] = useState([])
    useEffect(() => {
        getBlog()
    }, [])
    const path ="https://bank-eldam.herokuapp.com"
    const getBlog = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://bank-eldam.herokuapp.com/api/v1/blog", requestOptions)
            .then(response => response.json())
            .then(result => {
                setBlgg(result)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div className="container text-center my-5">
            <div className="row mx-0">
                {Blgg.map( ({_id ,title, image, content}) => {
                    let string = content;
                    let length = 50;
                    let trimmedString = string.substring(0, length);
                    return (
                        <div key={_id} className="col-10 col-md-4 mx-auto">
                            <Link to={`/Single/${_id}`} className="link_blog" style={{ cursor:"pointer" }}>
                                <div className="px-2">
                                    <div className="card" >
                                        <img src={path+image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title font-main px-0 title_blog text-right">{title}</h6>
                                            <p className="card-text font-main text-right text-dark ">{trimmedString}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
