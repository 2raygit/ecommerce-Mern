import logo  from '../assets/logo.svg'
import profileImg from "../assets/profile.png"

export const Navbar = () => {
  return (
    <nav className="flexBetween px-1   bg-white py-2 ring-1 ring-slate-900/5 relative">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="uppercase  bold-22 text-white  bg-secondary px-3   tracking-widest  rounded-md  line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:py-1 ">
        Admin Panel
      </div>
      <div>
        <img src={profileImg} alt="" className="h-12 w-12 rounded-full" />
      </div>
    </nav>
  );
}
