import '../../Asset/ShortAboutUs.css'
import { Link } from 'react-router-dom';
const ShortABout = () => {
    return(
        <div className="shortAbout">
            <div className='about-left text-center'>
                <h1>Hướng Về Tương Lai</h1>
                <p>Với sức mạnh công nghệ, MCT Smart Recruitment Platform kế thừa những hiệu quả hiện tại và mang đến trải nghiệm một cách hoàn toàn khác biệt, giúp doanh nghiệp tuyển dụng hiệu quả trong thời đại số.</p>
                <br/>
                <button className='more-see'>Xem Thêm</button>
            </div>
            <div className='about-right'>
            </div>
        </div>
    );
}
export default ShortABout;