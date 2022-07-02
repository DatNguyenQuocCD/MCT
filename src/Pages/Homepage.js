import ShortABout from "../Component/About/ShortAboutUs";
import Banner from "../Component/Banner/Banner"
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header"
import Slogan from "../Component/Slogan/Slogan";

const HomePage = () => {
    return(
        <>
            <Header/>
            <Banner/> 
            <ShortABout/>
            <Slogan />
            <Footer/>
        </>
    )
}

export default HomePage;