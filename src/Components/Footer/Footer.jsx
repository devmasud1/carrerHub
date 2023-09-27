import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-base-200 py-14">
      <footer className=" footer max-w-[1440px] mx-auto text-base-content ">
        <aside>
          <h1 className="text-3xl font-extrabold">CareerHub</h1>
          <p>
            There are many variations of passages of Lorem Ipsum <br />
            but the majority have suffered alteration in some form.
          </p>

          <div className="flex gap-8 text-5xl mt-5">
            <BsFacebook className="bg-white text-blue-500 p-2 rounded-full"></BsFacebook>
            <AiFillTwitterCircle className="bg-white text-blue-500 p-2 rounded-full"></AiFillTwitterCircle>
            <AiOutlineInstagram className="bg-white text-blue-500 p-2 rounded-full"></AiOutlineInstagram>
          </div>
        </aside>
        <div className="flex justify-between w-full">
          <nav className="grid gap-2">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="grid gap-2">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="grid gap-2">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="grid gap-2">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      <hr  className= "max-w-[1440px] mx-auto bg-slate-500 w-full h-1 mt-6"/>
    </div>
  );
};

export default Footer;
