import React from "react";
import { Link } from "react-router-dom";

// import "./../../Asset/login-form.css"
import Input from "./Input";

function Form(props) { 
    return(
        <div className="modal is-open">
        <div className="modal-container">
          <div className="modal-left">
            <h1 className="modal-title">{props.modalTitle}</h1>
            <form>
              <div className="input-block">
                <Input htmlfor="Email" label="Email" type="email" name="email" id="email" />
              </div>
              <div className="input-block">
                <Input htmlFor="Password" label="Password" type="text" name="password" id="password" />
              </div>
              <h5 name="error" ></h5>
              <div className=" modal-buttons">
                <button className="input-button" name="login">
                  <Link to="/Home" className="nav-link">Đăng Nhập </Link>
                </button>
                <button className="input-button" name="signup">
                  <Link to="/Register" className="nav-link" >Đăng Ký </Link>
                </button>
              </div>
            </form>
          </div>
          <div className="modal-right">
            <img src="" alt="Photo" />
          </div>
        </div>
      </div>
    )
}

export default Form;