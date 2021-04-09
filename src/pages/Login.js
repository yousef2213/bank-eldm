import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BloodContext } from '../Context/context';

//



function Login() {

    const { LoginS } = useContext(BloodContext)

    return (
        <div className="container mx-auto text-center py-5">
            <div className="row mx-0">
                <div className="col-10 mx-auto">
                    <form className="my-4">
                        {/* <h4 className="text-right font-main font-weight-bold pb-3">
                        تسجيل الدخول
                        </h4> */}
                        <div className="my-3 text-right">
                            <label className="label font-main text-right">بريدك الالكتروني</label>
                            <input type="email" name="email" className="inputLogin text-right pr-2" id="valueemailLogin" />
                        </div>
                        <div className="my-3 text-right">
                            <label className="label font-main"> كلمة المرور </label>
                            <input type="password" name="password" className="inputLogin text-right pr-2" id="valuepasswordLogin" />
                        </div>
                        <div className="form-main d-block ml-3 text-right">
                            <label htmlFor="defaultCheck1"  className="form-check-label mx-1 font-main font-weight-bold my-0 mr-4">
                             تذكرني
                            </label>
                            <input className="form-check-input form-check-inpu" type="checkbox" value="" id="defaultCheck1" />
                        </div>
                        <div className="text-center w-100 ml-auto mt-3">
                            <div>
                                <Link to="/"  className="inputLoginBtn my-0 font-main px-5 w-100" onClick={(e) => LoginS(e)}>
                                    دخول
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default Login