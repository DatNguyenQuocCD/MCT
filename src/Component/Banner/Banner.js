import React from "react";
import '../../Asset/Banner.css'
const Banner =() =>{ 
    return(
        <div className="banner">
            <video loop muted autoPlay id="myVideo">
                <source
                    src="/Images/file.mp4"
                    type="video/mp4"
                />     
            </video>
            <div className="text-banner"><div className="col-2">
                    <div>
                        <h1 className="title text-center">Việc Làm Tức Thời</h1>
                        <div className="col-2">
                            <div className="call-us text-center">
                                <h3>Đường Giây Nóng</h3>
                                <p>053-987-7321</p>
                            </div>
                            <div className="start-online text-center">
                                <h3>Kiếm Việc Ngay!</h3>
                                <p>Kiếm Việc Nhanh Chóng. <br/> Uy Tín & Chất Lượng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Banner;