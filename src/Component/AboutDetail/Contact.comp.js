import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div className='LeftContact'>
          <p>Kết nối</p>
          <div> <input type="name" class="form-control" id="name" placeholder="Họ và tên" name="name"></input> </div>
          <div> <input type="email" class="form-control" id="email" placeholder="Nhập địa chỉ email" name="email"></input> </div>
          <div> <input type="subject" class="form-control" id="subject" placeholder="Nhập tiêu đề email" name="subject"></input> </div>
          <div> <textarea  id="message" name="message" rows={5} cols={60} placeholder="Ghi chú"/> </div>
          
        </div>
        <div className='ImagesRightContact' style={{backgroundImage: 'url(https://giupviectot.vn/wp-content/uploads/2020/04/ti%CC%80m-vie%CC%A3%CC%82c-la%CC%80m-giu%CC%81p-vie%CC%A3%CC%82c-nha%CC%80-1-768x576.jpeg)',
         backgroundRepeat: 'no-repeat', textIndent: '10px', textAlign: 'left', color: 'red'}}>  
          <p className='TextRightContact'> <b>Tương tác với chúng tôi qua email</b> </p>
        </div>
      </div>
    )
  }
}
