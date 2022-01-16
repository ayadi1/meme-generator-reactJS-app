import logo from "../assets/images/TrollFace.png";
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img alt="" src={logo} />
        Meme Generator
      </div>
      <div className="tag">React Course - Project 3</div>
    </header>
  );
}
