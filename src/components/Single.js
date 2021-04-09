import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Single(props) {
    const [Single, setSingle] = useState({})
    useEffect(() => {
        window.scrollTo(0,0)
        getSingle()
    }, [])
    const path ="https://bank-eldam.herokuapp.com"
    const getSingle = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://bank-eldam.herokuapp.com/api/v1/blog/${props.match.params.id}`, requestOptions)
            .then(response => response.json())
            .then(result => setSingle(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div className="container text-center my-5">
        <div className="row mx-0">
            <div className="col-10 mx-auto">
                    <div className="px-2">
                        <div className="card" >
                            <img src={path+Single.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title font-main px-0 text-right">{Single.title}</h4>
                                <p className="card-text font-main text-right">{Single.content}</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    )
}
