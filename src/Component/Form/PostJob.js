import React from "react";
import {Link} from "react-router-dom";
import Input from "./Input";

function PostJob(props) { 
    return(
        <div class="modal is-open">
        <div class="modal-container">
            <div class="modal-left">
                {/* <h1 class="modal-title">{props.modalTitle}</h1> */}
                <form>
                    <div class="input-block">
                        <Input for={"Hình Ảnh"} label={"Hình Ảnh"} type={"file"} name={"img"} id={"img"}/>
                    </div>
                    <div class="input-block">
                        <Input for={"Tên Công Việc"} label={"Tên Công Việc"} type={"text"} name={"name-job"} id={"name-job"}/>
                    </div>
                    <div class="input-block">
                        <Input for={"Mô Tả Công Việc"} label={"Mô Tả Công Việc"} type={"text"} name={"job-description"} id={"job-description"}/>
                    </div>
                    <div class="input-block">
                        <Input for={"Lương"} label={"Lương"} type={"text"} name={"salary"} id={"salary"}/>
                    </div>
                    <div class="input-block">
                        <Input for={"Conntact"} label={"Thông Tin Liên Hệ"} type={"text"} name={"conntact"} id={"conntact"}/>
                    </div>
                    <h5 name=" error"></h5>
                    <div class=" modal-buttons">
                        <button class="input-button" name="login">Lưu</button>
                        <button class="input-button" name="signup">Thoát</button>
                    </div>
                </form>
            </div>
            <div class="modal-right">
                <img src="https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/629c214caa2c97ddaf3bb6d1/thumbnail.png?AWSAccessKeyId=AKIA6LFXYJ6BXG4EKM6A&Expires=1654573770&Signature=lM3bVSpJdXL29yaOHfHyfZZQ6No%3D" alt="Photo" />
            </div>
        </div>
    </div>
    )
}

export default PostJob;