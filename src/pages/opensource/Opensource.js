import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import styles from "./Opensource.module.css";

const Opensource = (props) => (
  <div className={styles["opensource-main"]}>
    <Header theme={props.theme} />
    <Organizations theme={props.theme} />
    <OpensourceCharts theme={props.theme} />
    <PullRequests theme={props.theme} />
    <Issues theme={props.theme} />
    <Footer theme={props.theme} onToggle={props.onToggle} />
    <TopButton theme={props.theme} />
  </div>
);

export default Opensource;
