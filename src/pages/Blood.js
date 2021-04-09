import React from 'react'
import { useEffect, useState } from 'react';

export default function Blood(props) {
    const [Blood, setBlood] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        Get()
    }, [])

    const Get = () => {
        // DB
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({});

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };
        fetch(`https://bank-eldam.herokuapp.com/api/v1/users/searchDonates/${props.match.params.city}/${props.match.params.type}`, requestOptions)
        .then(response => {
            if(response.status === 200){
                return response.json()
            }else {
                alert("من فضلك اختر المدينة وفصيلة الدم المطلوبة")
            }
        })
        .then(result => {
            // console.log(result.donates);
            setBlood(result.donates)
        })
        .catch(error => console.log('error', error));   
    }

    if(Blood.length === 0 ){
        return(
            <div className="container text-center my-5">
                <div className="row mx-0">
                    <div className="col-12 col-md-10 mx-auto">
                        <h2 className="text-center py-5 font-main"> لا يوجد متبرعين</h2>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container text-center my-5">
        <div className="row mx-0">
        <div className="col-12 col-md-10 mx-auto my-3">
            <h1 className="font-main text-center">المتبرعين</h1>
        </div>
            {Blood.map( ({userEmail, userName, city, phone}) => {
                return (
                    <div className="col-12 col-md-10 mx-auto my-3">
                        <div className="item text-right">
                            <h3 className="text-right text-capitalize rounded-3">{userName}</h3>
                            <p>{userEmail}</p>
                            <p className="py-0 mb-0">{city}</p>
                            <p className="py-0">{phone}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
