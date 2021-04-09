import React from "react";
import logo2 from "../image/logo-Recovered.png";
import facebook from "../image/facebook-logo.png";
import twitter from "../image/twitter (6).png";
import instagram from "../image/instagram (5).png";

import appstore from "../image/apple-store-badge.png";
import googlestore from "../image/google-play-badge-ar.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid text-center bg-footer">
      <div className="container mx-0 px-0 text-center py-5  mx-auto">
        <div className="row mx-0 text-center">
          {/* col 1 */}

          <div className="col-12 col-md-4 mx-auto px-0 col3">
            <h3 className="font-main text-white">احصل على التطبيق من</h3>
            <div className="ddsmall">
            <img src={appstore} className="my-3 mt-0 mt-md-5 img11" width="200" />
            <img src={googlestore} className="mb-0 mb-md-3 img22" width="240" />
            </div>
          </div>

          {/* col 2 */}
          <div className="col-12 col-md-4 mx-auto px-0 col1 mt-3 mt-md-0">
            <h3 className="font-main text-white titlefooter">روابط سريعة</h3>
            <Link to="/" className="font-main d-block link-footer">
              الرئيسية
            </Link>
            <Link to="/سياسة-الخصوصية" className="font-main d-block link-footer">
              سياسة الخصوصية
            </Link>
            <Link to="/about" className="font-main d-block link-footer">
              من نحن
            </Link>
          </div>
          {/* col 3 */}
          <div className="col-12 col-md-4 mx-auto px-0 col1">
            <div className="d-flex justify-content-center">
              <div className="bg-white rounded">
                <img src={logo2} width="130" height="130" alt="logo2" />
                <h5 className="px-3 py-0 py-md-3  text-dark font-main" style={{ fontSize:"15px" }}>
                  مؤسسة خيرية غير هادفة للربج
                </h5>
                {/* <div className="d-flex justify-content-between w-50 mx-auto">
                  <img src={facebook} width="30" height="30" />
                  <img src={twitter} width="30" height="30" />
                  <img src={instagram} width="30" height="30" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-0 text-center mt-4">
          <div className="col-10 mx-auto px-0">
            <h4 className="namefooter">
              تصميم وبرمجة
              <a className="mr-2" style={{color:"#ef096a" }} href="https://best-gator.com/" target="blank">
                بيست جيتور
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
