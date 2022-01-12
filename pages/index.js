import Application from "../components/Home/Application/Application";
import Community from "../components/Home/Community/Community";
import Develop from "../components/Home/Develop/Develop";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import Missions from "../components/Home/Missions/Missions";
import Navbar from "../components/Home/Navbar/Navbar";


const home = ({missions}) => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Missions data={missions}/>
            <Develop/>
            <Community/>
            <Application/>
            <Footer/>
        </div>
    );
};

export default home;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/missiondata')
    const data = await res.json()
  
    return {
        props: {
            missions: data,
        }
    }
  }