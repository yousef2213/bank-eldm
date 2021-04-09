import React, {Component} from 'react'
import { createContext } from 'react'

const BloodContext = createContext()
const publicIp = require("react-public-ip");
class ProviderBlood extends Component {

    state = {
        Login: false,
        data: {},
        Ip: ''
    }
    componentDidMount() {
        // User
        this.getIp();
        this.setState({
            Login: this.getLogin(),
            data: this.getData(),
        });
    }
    getLogin = () => localStorage.getItem("LoginBlood") ? JSON.parse(localStorage.getItem("LoginBlood")) : false;
    getData = () => localStorage.getItem("UserBlood") ? JSON.parse(localStorage.getItem("UserBlood")) : {};

    Synch = () => {
        localStorage.setItem("LoginBlood", JSON.stringify(this.state.Login));
        localStorage.setItem("UserBlood", JSON.stringify(this.state.data));
    }
    getIp = async () => {
        const ipv4 = await publicIp.v4();
        this.setState({
            Ip: ipv4
        })
    }

    LoginS = (e) => {
        e.preventDefault();
        const email = document.getElementById("valueemailLogin").value;
        const pass = document.getElementById("valuepasswordLogin").value;
        // DB
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://bank-eldam.herokuapp.com/api/v1/users/login", requestOptions)
        .then(response => {
            let data;
            if(response.status === 200){
                data = response.json()
            }else {
                data = 201
                // alert("من فضلك تاكد من صحة حقول الادخال")
            }
            return data
        })
        .then(result => {
            console.log(result);
            if(result === 201){
                alert("حدث خطا من فضلك حاول مرة اخري")
            }else {
                this.setState({
                    Login: true,
                    data: result
                }, () => {
                    this.Synch();
                    alert("تم تسجيل الدخول بنجاح وسيتم نقلك الي الصفحة الرئيسية الان")
                    window.location.replace(window.location.origin + "/");
                })
            }
        })
        .catch(error => console.log('error', error));    
    }

    render() {
        return (
            <BloodContext.Provider value={{
                ...this.state,
                LoginS: this.LoginS
            }}>
                {this.props.children}
            </BloodContext.Provider>
        )
    }
}



export { BloodContext, ProviderBlood }