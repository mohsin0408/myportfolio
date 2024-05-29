import img from "./img/person.jpg";

export default function HeroSection (){
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
        <div className="hero--section--content">
            <p className="section--title">Hey, I am Mohsinali</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Frontend</span>{""}
                    <br/>
                </h1>     
                <p className="hero--section--description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo.
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo.
                </p>
            </div>       
                <button className="btn btn-primary"> Get in touch </button>
        </div>
        <div className="hero--section--img">
                <img src={img} alt="person-img"/>
        </div>
        </section>
    );
}