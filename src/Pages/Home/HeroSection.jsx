// import Img from "../../../public/img/person.jpg";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box content-box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I am Mohsinali</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">
              Frontend Developer
            </span>

            <br />
          </h1>
          <p className="hero--section--description">
            I am an frontend developer with hands-on experience of 1+ years at
            Mak byte, where I’ve worked on several projects using technologies
            like HTML, CSS, JavaScript, React, Redux, Firebase, and Tailwind
            CSS.
            <br />
            <br />I am currently open to work and ready to join.
          </p>
        </div>
        <a href="/Mohsinali-CV .pdf" className="btn btn-primary">
          Resume
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile.jpeg" alt="person-img" />
      </div>
    </section>
  );
}
