import "../../Asset/Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className='col-logo'>
                    <img className='logo' alt='' src='https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/629c2285aa2c97ddaf3bb8b8/thumbnail.png?AWSAccessKeyId=AKIA6LFXYJ6BXG4EKM6A&Expires=1655777940&Signature=SZFfg82FDxbMQq%2FlrhtRflFiM%2Bk%3D'/>
                    <h1>MCT</h1>
                </div>
                <p>© 2023 by MCT with PNV.</p>
            </div>
            <div className="footer-contact">
                <p className="footer--title">Contact</p>
                <p>Hotline: 0123456789</p>
                <p>Email: vieclamtucthoi@gmail.com</p>
                <p>Address: Cao Dang Nghe Da Nang</p>
            </div>
            <div className="footer-workHours">
                <p className="footer--title">Thời Gian Làm Việc</p>
                <p>Thứ 2-thứ 6: 8:00am - 5:30 pm</p>
                <p>Thứ 7: 8:00am - 2:00pm</p>
            </div>
        </footer>
    )
}

export default Footer;