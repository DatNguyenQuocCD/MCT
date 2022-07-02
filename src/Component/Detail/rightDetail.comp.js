import React from 'react';
import '../../Asset/About.css';
function RightDetail(props) {

  return (
    <div className="Infor-company">
        <div>
          <h2>Công ty TNHH {props.name}</h2>
          <img src={props.urlImage} alt="" height="100vh" width="auto"></img>
        </div>
        <div className='Intruduction-company'>
          <p>Develop a modernized banking ecosystem, with a digital core and advanced analytics to process your data.Reinvent your retail operations through technology that fully transforms the customer experience.</p>
          <p>Địa Chỉ: 75c, Nguyễn văn Linh, Đà nẵng</p>
          <h3>vieclamtucthoi.com</h3>
        </div>
    </div>
  );
}

export default RightDetail;