import img3 from "./img/person.jpg"

export default function AboutMe(){
    return<section id="AboutMe" className="about--section">
        <div className="about--section--img">
            <img src={img3} alt="myphoto"/>
        </div>
        <div className="hero--section--content--box about--section--box">
            <p className="hero--section--box">About</p>
            <h1 className="skills--section--heading">About Me</h1>
            <p className="hero--section--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis pariatur, cupiditate dicta deserunt excepturi assumenda perspiciatis vitae cum exercitationem! Consequatur minus nostrum reprehenderit neque provident impedit esse nulla assumenda.
            </p>
            <p className="hero--section--description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nobis pariatur, cupiditate dicta deserunt excepturi assumenda perspiciatis vitae cum exercitationem! Consequatur minus nostrum reprehenderit neque provident impedit esse nulla assumenda.
            </p>
        </div>
    </section>
}