import { NavLink } from "react-router-dom";


const Nav = () => {
  return (

<>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="bg-neutral text-neutral-content menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-30">
        <li><NavLink to={"/aboutme/"}>About Me</NavLink></li>
        <li><NavLink to={"/projects/"}>Projects</NavLink></li>
        <li><NavLink to={"/resume/"}>Resume</NavLink></li>
      </ul>
    </div>
    <NavLink to={"/"} className="btn btn-ghost normal-case text-xl">Nicolas Murphy</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={"/aboutme/"}>About Me</NavLink></li>
      <li><NavLink to={"/projects/"}>Projects</NavLink></li>
      <li><NavLink to={"/resume/"}>Resume</NavLink></li>
    </ul>
  </div>
</>

  );
};
export default Nav;
