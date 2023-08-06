import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

const Home = (props) => (
  <>
    <Header theme={props.theme} />
    <Greeting theme={props.theme} />
    <Skills theme={props.theme} />
    <Footer theme={props.theme} />
    <TopButton theme={props.theme} />
  </>
);

export default Home;
