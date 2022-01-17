import { useState } from "react";
import bg from "../assets/images/memeimg.png";
import memesData from "../memesData";
export default function Main() {
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [finalTextOne, setFinalTextOne] = useState("");
  const [finalTextTwo, FinalTextTwo] = useState("");
  const [Background, setBackground] = useState(bg);
  const generatMemes = () => {
    const number = Math.floor(
      Math.random() * (memesData.data.memes.length - 1)
    );
    return memesData.data.memes[number].url;
  };
  const updateMemes = () => {
    setFinalTextOne(textOne);
    FinalTextTwo(textTwo);
    const newBg = generatMemes();
    setBackground(newBg);
  };
  const handleChangeTextOne = (e) => {
    setTextOne(e.target.value);
  };
  const handleChangeTextTwo = (e) => {
    setTextTwo(e.target.value);
  };
  return (
    <main className="main">
      <div className="main--form">
        <div className="main--form__input">
          <input
            type="text"
            placeholder="add text"
            value={textOne}
            onChange={handleChangeTextOne}
          />
          <input
            type="text"
            placeholder="add text"
            value={textTwo}
            onChange={handleChangeTextTwo}
          />
        </div>
        <button className="main--form__button" onClick={updateMemes}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="main--img" style={{ background: `url(${Background})` }}>
        <p className="main--img__text__one">{finalTextOne}</p>
        <p className="main--img__text__two">{finalTextTwo}</p>
      </div>
    </main>
  );
}
