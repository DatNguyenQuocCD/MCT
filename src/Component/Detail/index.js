import { useParams } from "react-router-dom";
// import '../../Asset/About.css';
import LeftDetail from "./leftDetail.comp";
import RightDetail from './rightDetail.comp';
import Content from "./Content.comp";
import Contact from "./Contact.comp";
import Records from '../../DataJson/records.json';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Detail = () => {
  const DetailId = useParams();
  const post = Records.filter(record=>record.id == DetailId.DetailId);
  console.log(post)
  return (
  <>
  <Header/>
    <div className="Overall-component">
          <div className="Both-side">
            <LeftDetail/>
            <Content/>
          </div>
          <div>
          <RightDetail name={post[0].name_job}
           urlImage={post[0].img}/>
          </div>
          <div>
        <Contact/>
          </div>
      </div>
    <Footer />
  </>
  );
};
export default Detail;