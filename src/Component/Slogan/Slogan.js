import '../../Asset/Slogan.css'
const Slogan = () => {
    return(
        <div className='text-center slogan-center'>
            <div className='center'>
                <div className='slogan'>
                    <h1 className='text-center'>Phương Châm Làm Việc</h1>
                </div>
            </div>
            <div className='center'>
                <img alt='' className='img-slogan' src='Images/slogan.png'/>
            </div>
            <br/><br/><br/><br/><br/>
            <img alt='' src='Images/partner.png'/>
        </div>
    );
}
export default Slogan;