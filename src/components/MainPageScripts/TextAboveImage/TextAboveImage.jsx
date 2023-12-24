import React from "react";
import text from "./TextAboveImage.module.css";

const TextAboveImage = () => {
  return (
    <div className={text.text}>
      <div className={text.firstP}>
        <p className={text.textImg1}>
          Легко изучайте сложные предметы с помощью флеш карточек
        </p>
      </div>
      <div>
        <p className={text.textImg2}>
          Достигайте большего вместе с <span>Flashcards study hard</span>
        </p>
      </div>
    </div>
  );
}

export default TextAboveImage;