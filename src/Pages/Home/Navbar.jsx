import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import img2 from "./img/download.jpg";

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = ()=>{
        setNavActive(!navActive)
    }
    const closeMenu = () =>{
        setNavActive(false)
    }
    useEffect(()=>{
        const handleResize = () =>{
            if(window.innerWidth <= 500){
                closeMenu();
            }
        }
        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize",handleResize)
        };
    },[]);

    useEffect(()=>{
        if(window.innerWidth <= 1200 ){
            closeMenu();
        }
    },[]);

    return(
        <nav className={`navbar ${navActive?"active":""}`}>
            <div>
            <img src={img2} alt="logo-ipsum"className="logo-img"/>
            </div>
            <a className={`nav_hamburger ${navActive ? "active":""}`} onclick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar__items ${navActive ? "active":""}`}>
                <ul>
                <li>
                    <Link 
                    onclick={closeMenu} 
                    activeClass="navBar--active-content" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="heroSection"
                    className="navbar--content"
                    >  
                    Home
                    </Link>
                </li>
                <li>
                    <Link 
                    onclick={closeMenu} 
                    activeClass="navBar--active-content" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="MyPortfolio"
                    className="navbar--content"
                    >  
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                    onclick={closeMenu} 
                    activeClass="navBar--active-content" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="AboutMe"
                    className="navbar--content"
                    >  
                    About Me
                    </Link>
                </li>
                <li>
                    <Link 
                    onclick={closeMenu} 
                    activeClass="navBar--active-content" 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Testimonials"
                    className="navbar--content"
                    >  
                    Testimonials
                    </Link>
                </li>
                </ul>
            </div>
            <Link 
                onclick={closeMenu} 
                activeClass="navBar--active-content" 
                spy={true} 
                smooth={true}
                offset={-70}
                duration={500}
                to="Contacts"
                className="btn btn-outline-primary"
                >  
                Contact Me
            </Link>

        </nav>
    );
}

export default Navbar;