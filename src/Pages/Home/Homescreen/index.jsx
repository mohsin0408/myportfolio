import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkill";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home (){
    return(
        <>
        <HeroSection/>
        <MySkills/>
        <AboutMe/>
        <MyPortfolio/>
        <Testimonials/>
        <ContactMe/>
        <Footer/>
        </>
    )
}