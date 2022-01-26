import { useState , useEffect } from "react";
import memesData from "../memesData";
export default function Main() {
  const [inputData, setInputData] = useState({
    textOne: "",
    textTwo: "",
  });

  const [Background, setBackground] = useState("");
  const [imgWidth, setImgWidth] = useState(550);
  const [imgHeight, setImgHeight] = useState("auto");
  const generatMemes = () => {
    const number = Math.floor(
      Math.random() * (memesData.data.memes.length - 1)
    );
    return memesData.data.memes[number];
  };
  const updateMemes = () => {
    setBackground(generatMemes().url);
    setImgWidth(generatMemes().width);
    setImgHeight(generatMemes().height);
  };
  const handleChange = (e) => {
    setInputData((oldFormData) => {
      return {
        ...oldFormData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(inputData);
  };
  useEffect(()=>{
    updateMemes()
  },[])
  return (
    <main className="main">
      <div className="main--form">
        <div className="main--form__input">
          <input
            type="text"
            placeholder="add text"
            value={inputData.textOne}
            onChange={handleChange}
            name="textOne"
          />
          <input
            type="text"
            placeholder="add text"
            value={inputData.textTwo}
            onChange={handleChange}
            name="textTwo"
          />
        </div>
        <button className="main--form__button" onClick={updateMemes}>
          Get a new meme image 🖼
        </button>
      </div>
      <div
        className="main--img"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <p className="main--img__text__one">{inputData.textOne}</p>
        <p className="main--img__text__two">{inputData.textTwo}</p>
      </div>
    </main>
  );
}
