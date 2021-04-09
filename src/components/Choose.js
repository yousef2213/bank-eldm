import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import location from "../image/location.png"
import Component from "../image/Component 2 – 1.png"
import { useEffect } from 'react'
import { BloodContext } from '../Context/context'

function Choose() {
  const { Ip } = useContext(BloodContext);
    const [Def, setDef] = React.useState("")
    const [val2, setVal2] = React.useState("")
    const [val, setVal] = React.useState("")


    const [Citys, setCitys] = React.useState([])
    useEffect(() => {
      CitysByIp();
    })
    useEffect(() =>{
        let route = document.querySelectorAll(".btnDS");
        route.forEach((link) =>{
          link.classList.remove("btnDS");
          link.addEventListener("click", ()=>{
            route.forEach(item =>{
              item.classList.remove("btnDS")
              item.classList.remove("btn-danger")
              
            })
            link.classList.add("btn-danger");
          })
        })
      },[])

      useEffect(() => {
        let show = document.getElementsByClassName("acoo"),
        i;
        for (i = 0; i < show.length; i++) {
          show[i].addEventListener("click", function () {
            this.classList.toggle("aa");
            var des = this.nextElementSibling;

            if (des.style.maxHeight) {
              console.log("yes");
              des.style.maxHeight = null;
            } else {
              des.style.maxHeight = des.scrollHeight + "px";
            }
          });
        }
          
      }, [])

      
    
      

    function CitysByIp() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`https://bank-eldam1996.herokuapp.com/api/v1/cities/${Ip}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setCitys(result)
          })
          .catch(error => console.log('error', error));
    }

      const Tog = (e) => {
        setVal(e.target.value)
        let btn = document.querySelector(".des22");
        let btn2 = document.querySelector(".desd");
        btn.classList.remove("desH")
        btn2.classList.add("desdH")
      }
    

 


      let City = Citys.map((item,i) => {
        return <input key={i} to="/" type="button" className="btn btn-outline-danger px-3 mx-2 py-2 btnDm btnDS1" value={item.cityName} onClick={(e) => Tog(e)} />
      })
    return (
        <div className="container text-center my-5">
          <div className="row mx-0">
              
            {/*  */}
            <div className="col-12 mx-auto">

            <div className="con">
              <button className="acoo">
                  <div className="d-flex justify-content-end">
                    <h3 className="text-right titledm font-main">اختر مدينتك </h3>
                    <img src={location} width="30" height="30" alt="location" />
                </div>
              </button>
              <div className="desd desd1 des2">
                    <div className="choose bg-white mx-auto">
                      {City}
                    </div>
              </div>
                <button className="acoo acoo2">
                  <div className="d-flex justify-content-end">
                      <h3 className="text-right titledm font-main">اختر فصيلة الدم المطلوبة </h3>
                      <img src={location} width="30" height="30" alt="location" />
                  </div>
                </button>
                <div className="des des22 desH">
                    {/*  */}
                    <div className="bg-white">
                        <div className="my-3">
                            <input to="/" type="button" className="btn btn-outline-danger dd  px-3 mx-2 py-2 btnDm btnDS" value="A+" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="A-" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="B+" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="B-" onClick={(e) => setVal2(e.target.value)} />
                        </div>  
                        <div className="my-3">
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="O+" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="O-" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="AB+" onClick={(e) => setVal2(e.target.value)} />
                            <input to="/" type="button" className="btn btn-outline-danger dd px-3 mx-2 py-2 btnDm btnDS" value="AB-" onClick={(e) => setVal2(e.target.value)} />
                        </div>  
                    </div>
                    {/*  */}
                </div>
            </div>
          </div>
            {/*  */}
              <div className="col-12 col-md-5 mx-auto my-5">
                <Link to={`/المتبرعين/${val}/${val2}`} className="btnTbr3 dd font-main px-5 w-100 py-2" style={{ fontSize: "20px" }} > ابحن عن متبرع الان </Link>
              </div>
          </div>
        </div>
    )
}

export default Choose
