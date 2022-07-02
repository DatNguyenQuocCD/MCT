import React from "react";
import Post from '../Component/Post/Post'
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';

function PostJobVacancies(){
    return(
        <div>
            <Header/>
            <Post modalTitle={"Post Job Vacancies"}/>
            <Footer/>
        </div>
    )
}

export default PostJobVacancies;