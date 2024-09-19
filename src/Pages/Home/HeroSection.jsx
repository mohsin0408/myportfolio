// import Img from "../../../public/img/person.jpg";

export default function HeroSection (){
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="section--title">Hey, I am Mohsinali</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color"> Frontend Developer </span>{""}
                    <br/>
                </h1>     
                <p className="hero--section--description">
                I am an enthusiastic and motivated web developer with hands-on experience of 6-months at Mak byte in HTML, CSS, JavaScript, and React.js for creating responsive and engaging user interfaces.
                <br/>
                <br/>
                    I am currently open to work and ready to join.
                </p>
            </div>       
                <button className="btn btn-primary"> Get in touch </button>
        </div>
        <div className="hero--section--img">
                <img src="./img/profile.jpeg" alt="person-img"/>
        </div>
        </section>
    );
}