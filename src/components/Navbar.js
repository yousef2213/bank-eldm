import React from 'react'
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from "../image/logo-Recovered.png"



function Navbar() {
    const HideNav = () => {
        let Nv = document.getElementById("navbarTogglerDemo03");
        Nv.classList.remove("show");
      };
    return (
        <div className="container-fluid text-center nv py-0">
            <div className="container py-0">
                <div className="row mx-0">
                    <div className="col-12 px-0 mx-0">
                        <nav className="navbar navbar-expand-lg navbar-light py-0">
                            <div className="container-fluid py-0">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <Link className="navbar-brand d-block d-md-none" to="/">
                                    <img src={logo} className="img-fluid" width="100" height="100" alt="logo" />
                                </Link>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-block d-md-none">
                                            <li className="nav-item">
                                                <Link className="nav-link color-main linknav" to="/about">من نحن</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active color-main linknav"  onClick={HideNav}  to="/">الرئيسية</Link>
                                            </li>
                                        </ul>
                                    <div>
                                            <Link to="/Sign-up" className="btn btn-login"  onClick={HideNav} >
                                                حساب جديد <AiOutlineUsergroupAdd />
                                            </Link>

                                            <Link to="/Login" className="btn btn-login"  onClick={HideNav} >
                                                تسجيل الدخول <AiOutlineUsergroupAdd />
                                            </Link>
                                    </div>

                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-none d-md-flex">
                                        <li className="nav-item">
                                            <Link className="nav-link color-main linknav" to="/about">من نحن</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active color-main linknav"  onClick={HideNav}  to="/">الرئيسية</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link className="navbar-brand d-none d-md-block " to="/">
                                    <img src={logo} className="img-fluid" width="120" alt="logo" />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
