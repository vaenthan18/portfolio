import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import "./About.scss"

function About() {
    return (
    <section id="about" className="flex content-center md:h-screen">
      <div className="container mx-auto flex md:flex-row items-center">
        <div className="sm:text-left break-normal mx-4 lg:flex-grow flex flex-col md:items-start">
          <h1 className="font-title text-5xl mb-10 font-medium text-gray-900 mt-8 md:pt-0">
            Vaenthan Jeevarajah
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Hey! &#128075;&#127998; I'm Vaenthan, a 4th year Software Engineering student at the University of Waterloo with an interest
            in full stack development, design, and machine learning and a passion for solving problems.
          </p>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Previously, I completed co-ops for <a className="GEM" href="https://www.gem.com/" target="_blank" rel="noopener noreferrer">Gem</a>, <a className="KPMG" href="https://home.kpmg/ca/en/home/services/tax/one-port.html" target="_blank" rel="noopener noreferrer">KPMG</a>, and <a className="AMD" href="https://www.amd.com/en" target="_blank" rel="noopener noreferrer">AMD</a>.
            Feel free to reach out! Always looking to work on something interesting. 
          </p>
          <p className="mb-8 leading-relaxed text-lg text-gray-700 font-bold">
            Currently seeking Winter 2023 Internships. 
          </p>
          <div className="inline text-4xl space-x-6 text-gray-400 mb-8 mb:pt-0">
            <a href="mailto:v2jeevar@uwaterloo.ca" className="hover:text-gray-700">
                <FontAwesomeIcon icon={faEnvelope} href="mailto:v2jeevar@uwaterloo.ca"/>
            </a>
            <a href="https://www.linkedin.com/in/vaenthanj/" className="hover:text-gray-700">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/vaenthan18/portfolio" className="hover:text-gray-700">
                <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;