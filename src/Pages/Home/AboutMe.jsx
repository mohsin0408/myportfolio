// import img3 from "./public/img/person.jpg"

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      {/* <div className="about--section--img">
            <img src={img3} alt="myphoto"/>
        </div> */}
      <div className="hero--section--content--box about--section--box">
        <p className="hero--section--box">About</p>
        <h1 className="skills--section--heading">About Me</h1>
        <p className="hero--section--description about-description ">
          I'm a Software Developer specializing in frontend development with 1+
          years of experience.
        </p>
        <p className="hero--section--description about-description ">
          I'm passionate about creating intuitive and user-friendly applications
          that solve real-world problems.
        </p>
        <p className="hero--section--description about-description ">
          I'm always looking for new and exciting projects to work on and Eager
          to bring problem-solving and collaboration skills to an innovative
          team.
        </p>
      </div>
    </section>
  );
}
