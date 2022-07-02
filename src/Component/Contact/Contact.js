import "../../Asset/Contact.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
    const [infoClient, setInfoClient] = useState()
    const getInfo = (e) =>{
        const name = e.target.name;
        const val = e.target.value;
        setInfoClient({
            ...infoClient,
            [name]:val})
        }
        const submitForm = (e) =>{
            e.preventDefault();
            axios.post(`http://localhost:3000/apply`, infoClient).then( (res) => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title:"THÀNH CÔNG",
                    text:"Đơn của bạn đã được gửi!"
                })
            });
            }
    return (
        <div className="contact--container">
            <div className="contact--content">
                <div className="contact--content--right">
                    <p className="contact--title">Cho Phép Bạn Làm Những Gì Bạn Thích</p>
                </div>
                <div className="contact--content--left">
                    <p>Sự tự do của bạn bắt đầu từ MCT. Hãy để chúng tôi chắp cánh sự nghiệp của bạn. Đăng ký ngay hôm nay để cùng MCT làm việc bất cứ đâu mọi lúc mọi nơi. TĂNG INCOME. Get HIRED Now. CÙNG MCT VƯƠN XA. Tìm kiếm việc làm tức thời ở MCT.</p>
                </div>
            </div>
            <div className="contact--map">
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1123473447274!2d108.23859831465123!3d16.059658788886853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f0057f675%3A0xdec5dbe31838c835!2zMzY1UitWOUcsIDEwMUIgTMOqIEjhu691IFRyw6FjLCBQaMaw4bubYyBN4bu5LCBTxqFuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655309415079!5m2!1svi!2s" title ="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="locations">
                <h1 className="text-center">Địa Điểm Chúng Tôi Phục Vụ</h1>
                <div className="container">
                    <div className="col-3">
                        <div>
                            <ul>
                                <li>Hà Nội</li>
                                <li>Hải Phòng</li>
                                <li>Bắc Giang</li>
                                <li>Hải Dương</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Nghệ An</li>
                                <li>Hà Tĩnh</li>
                                <li>Quảng Bình</li>
                                <li>Đà Nẵng</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Vũng Tàu</li>
                                <li>HCM</li>
                                <li>Bình Dương</li>
                                <li>Đồng Nai</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact--form">
                <div className="contact--form--right">
                    <p className="contact--title">Get Your Free Quote</p>
                    <p className="contact--form--right--text">Contact with us to know more our information. Thank You!!</p>
                </div>
                <div className="contact--form--left">
                    <form className="form--contact" onSubmit={submitForm}>
                    <div className="form--contact--group">
                            <label for="">Name:</label>
                            <input className="form--contact-input" type="text" name="name" onChange={getInfo} placeholder="Name"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Email:</label>
                            <input className="form--contact-input" type="text" name="email" onChange={getInfo} placeholder="Email"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Phone:</label>
                            <input className="form--contact-input" type="text" name="phone" onChange={getInfo} placeholder="Phone"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Birthday:</label>
                            <input className="form--contact-input" type="date" name="birthday" onChange={getInfo} placeholder="Birthday"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Gender:</label>
                            <input className="form--contact-input" type="text" name="gender" onChange={getInfo} placeholder="Gender"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Address:</label>
                            <input className="form--contact-input" type="text" name="address" onChange={getInfo} placeholder="Address"/>
                        </div>
                        <div className="form--contact--group">
                            <label for="">Message:</label>
                            <input className="form--contact-input" type="text" name="message" onChange={getInfo} placeholder="Message"/>
                        </div>
                        <button type="submit" className="btn btn--form--submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;