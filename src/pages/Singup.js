import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useEffect } from 'react';


function Singup() {
    const [value, setValue] = React.useState(''); // النوع
    const [value2, setVal2] = React.useState(''); // showInfo
    const [value3, setVal3] = React.useState('');
    const [value4, setVal4] = React.useState('');

    const [Gov, setGov] = React.useState([]);

    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://bank-eldam.herokuapp.com/api/v1/cities", requestOptions)
            .then(response => response.json())
            .then(result => setGov(result))
            .catch(error => console.log('error', error));
    }, [])

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const add = (e) => {
        e.preventDefault();
        const name = document.getElementById("valuename").value;
        const email = document.getElementById("valueemail").value;
        const phone = document.getElementById("valurphone").value;
        const boold = document.getElementById("valueboold").value; // فصيلة الدم3
        const Country = document.getElementById("valueCountry").value;
        const State = document.getElementById("valuestate").value;
        const pass = document.getElementById("valuepassword").value;
        const passC = document.getElementById("valuepasswordconfirm").value;
        if(pass !== passC) {
            alert("راجع معلوماتك")
        }
        const type = value; // نوع 

        const showInfo = value2; // اظهر معلوماتي 
        const connectionTimes = value3; // وقت الاتصال

        // DB
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "userName": name,
            "userEmail": email,
            "password": pass,
            "phone": phone,
            "gender": type,
            "bloodType": boold,
            "state": State,
            "city": Country,
            showInfo,
            connectionTimes,
            "donationNumbers": 1
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://bank-eldam.herokuapp.com/api/v1/users/signup", requestOptions)
        .then(response => response.json())
        .then( () => {
            alert("تم التسجيل بنجاح")
            window.location.replace(window.location.origin + "/")
        })
        .catch(error => console.log('error', error));    
    }

    const addO = (e) => {
        e.preventDefault();
        const name = document.getElementById("valuenameO").value;
        const email = document.getElementById("valueemailO").value;
        const phone = document.getElementById("valurphoneO").value;
        const pass = document.getElementById("valuepasswordO").value;
        const passC = document.getElementById("valuepasswordconfirmO").value;
        const address = document.getElementById("valuaddresO").value;
        const dwla = document.getElementById("dwla").value;
        if(pass !== passC) {
            alert("راجع معلوماتك")
        }
     

        // DB
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "hospitalName": name,
            "email": email,
            "hospitalPassword": pass,
            "hospitalPhone": phone,
            "state": dwla,
            "city": value4,
            "address": address
        })
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        

        fetch("https://bank-eldam.herokuapp.com/api/v1/hospital/signup", requestOptions)
        .then(response => response.json())
        .then( () => {
            alert("تم التسجيل بنجاح")
            window.location.replace(window.location.origin + "/")
        })
        .catch(error => console.log('error', error));    
    }

    const handelSelected = () => {
        let selected = document.getElementById("valueCountryO");
        setVal4(selected.value)
    }

    return (
        <div className="container mx-auto text-center py-5">
            <div className="row mx-0">
                <div className="col-10 mx-auto">

                        <div>
                            <ul class="nav nav-tabs justify-content-end" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">التسجيل</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">التسجيل كمستشفي</a>
                            </li>
                        
                            </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/* hgjs[dg] */}


                                        <div className="">
                                                <form className="my-4">
                                                
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">اسمك</label>
                                                        <input type="text" name="name" className="inputLogin text-right pr-2" id="valuename" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">بريدك الالكتروني</label>
                                                        <input type="email" name="email" className="inputLogin text-right pr-2" id="valueemail" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">الجوال</label>
                                                        <input type="number" name="number" className="inputLogin text-right pr-2" id="valurphone" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">فصيلة الدم</label>
                                                        <input type="text" name="email" className="inputLogin text-right pr-2" id="valueboold" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">المدينة</label>
                                                        <input type="text" name="country" className="inputLogin text-right pr-2" id="valueCountry" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">المديرية</label>
                                                        <input type="text" name="city" className="inputLogin text-right pr-2" id="valuestate" />
                                                    </div>

                                                    <FormControl component="fieldset" className="d-flex">
                                                        <RadioGroup aria-label="gender"  className="flex-row ml-auto font-main" name="radio-button-demo" value={value} onChange={handleChange}>
                                                            <FormControlLabel value="انثي" control={<Radio />} label="انثي" />
                                                            <FormControlLabel value="ذكر" control={<Radio />} label="ذكر" />
                                                        </RadioGroup>
                                                    </FormControl>

                                                    <div className="my-3 text-right">
                                                        <label className="label font-main"> كلمة المرور </label>
                                                        <input type="password" name="password" className="inputLogin text-right pr-2" id="valuepassword" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main">تاكيد كلمة المرور </label>
                                                        <input type="password" name="password" className="inputLogin text-right pr-2" id="valuepasswordconfirm" />
                                                    </div>
                                            

                                                    {/* showInfo */}
                                                    <div className="text-right">
                                                    <FormControl component="fieldset" className="my-3">
                                                        <RadioGroup aria-label="gender" className="flex-row ml-auto font-main" name="radio-button-demo" value={value2} onChange={(e) => setVal2(e.target.value)}>
                                                            <FormControlLabel value="للمستشفيات فقط" control={<Radio />} label="اظهر معلوماتي للمستشفيات فقط" />
                                                            <FormControlLabel value="للجميع" control={<Radio />} label="اظهر معلوماتي للجميع" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </div>

                                                <div className="text-right">
                                                <FormControl component="fieldset" className="my-3">
                                                        <RadioGroup aria-label="gender" className="flex-row ml-auto font-main" name="radio-button-demo" value={value3} onChange={(e) => setVal3(e.target.value)}>
                                                            <FormControlLabel value="كل الاوقات" control={<Radio />} label="متصل في جميع الاوقات" />
                                                            <FormControlLabel value="متصل في المساء" control={<Radio />} label="متصل في المساء" />
                                                            <FormControlLabel value="متصل في الصباح" control={<Radio />} label="متصل في الصباح" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                    </div>

                                            


                                                    <div className="text-center ml-auto mt-3">

                                                    <div>
                                                        <button className="inputLoginBtn my-0 font-main px-5 w-100" onClick={(e) => add(e)}>
                                                            تسجيل
                                                        </button>
                                                    </div>

                                                    </div>
                                                </form>
                                            </div>

                                    </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    
                                            <form>                            
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">اسمك</label>
                                                        <input type="text" name="name" className="inputLogin text-right pr-2" id="valuenameO" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">بريدك الالكتروني</label>
                                                        <input type="email" name="email" className="inputLogin text-right pr-2" id="valueemailO" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">الجوال</label>
                                                        <input type="number" name="number" className="inputLogin text-right pr-2" id="valurphoneO" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">العنوان</label>
                                                        <input type="address" name="number" className="inputLogin text-right pr-2" id="valuaddresO" />
                                                    </div>
                                                 
                                                  
                                                    <select className="form-control address_country text-right" id="valueCountryO"  dir="rtl" onChange={handelSelected}>
                                                        <option className="d">اختر المدينة</option>
                                                        {Gov.map(( (item, i) => {
                                                        return  <option key={i} value={item.cityName} > {item.cityName} </option>
                                                        }))}
                                                    </select>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main text-right">الدولة</label>
                                                        <input type="country" name="number" className="inputLogin text-right pr-2" id="dwla" />
                                                    </div>


                                                    <div className="my-3 text-right">
                                                        <label className="label font-main"> كلمة المرور </label>
                                                        <input type="password" name="password" className="inputLogin text-right pr-2" id="valuepasswordO" />
                                                    </div>
                                                    <div className="my-3 text-right">
                                                        <label className="label font-main">تاكيد كلمة المرور </label>
                                                        <input type="password" name="password" className="inputLogin text-right pr-2" id="valuepasswordconfirmO" />
                                                    </div>
                                            


                                           

                                            


                                                    <div className="text-center ml-auto mt-3">

                                                    <div>
                                                        <button className="inputLoginBtn my-0 font-main px-5 w-100" 
                                                            onClick={(e) => addO(e)}
                                                        >
                                                            تسجيل كمستشفي
                                                        </button>
                                                    </div>

                                                    </div>
                                            </form>


                                </div>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Singup


