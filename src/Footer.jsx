import GitLab from "./Images/gitlab-svgrepo-com.png"
import GitHub from "./Images/github-142-svgrepo-com.png"
import LinkedIn from "./Images/linkedin-161-svgrepo-com.png"

const Footer = () => {
    return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div>
    <div className="grid grid-flow-col gap-8">
      <a
          href="https://gitlab.com/murphynick10"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
        width="40" src={GitLab}></img>
      </a>
      <a
          href="https://github.com/NicolasMurphy"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
         width="40" src={GitHub}></img>
      </a>
      <a
          href="https://www.linkedin.com/in/nicolas-murphy/"
          target="_blank"
          rel="noreferrer"
      >
        <img className="transition duration-300 ease-in-out hover:scale-110"
         width="40" src={LinkedIn}></img>
      </a>
    </div>
  </div>
</footer>
    );
  };

  export default Footer;
