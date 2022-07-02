import './App.css';
import './Asset/StyleForm.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PostJobVacancies from './Pages/PostJobVacancies';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Detail from './Component/Detail/index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/Register' element= {<Register />}/>
          <Route path='/Login' element= {<Login />}/>
          <Route path='/Home' element= {<HomePage />}/>
          <Route path='/About' element= {<AboutPage />}/>
          <Route path='/Post' element= {<PostJobVacancies />}/>
          <Route path='/Contact' element= {<ContactPage/>}/>
          <Route path='/Contact' element= {<ContactPage/>}/>
          <Route path='/Detail/:DetailId' element= {<Detail />}/>
        </Routes>
      </BrowserRouter>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
