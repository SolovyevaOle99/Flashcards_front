import React from "react";
import TextAboveImage from "../TextAboveImage/TextAboveImage";
import ButtonRegistrNow from "../ButtonRegistrNow/ButtonRegistrNow";
import SectionTwoParag from "../SectionTwoParag/SectionTwoParag";
import Section2Right from "../Section2Right/Section2Right";
import Section2Left from "../Section2Left/Section2Left";
import Section2Button from "../Section2Button/Section2Button";
import image1 from '../../../img/post1.png';
import image2 from '../../../img/post2.png';
import image3 from '../../../img/post3.png';
import Footer from "../Footer/Footer";
import style from "./MainPage.module.css";
import Post from "../Post/Post";
import Menu from "../../MenuSection1/Menu/Menu";
 
const MainPage = () => {
  return (
    <section>
      <Menu />
      <section className={`${style.main_section} ${style.container}`}>
        <div className={`${style.section1} ${style.main_photo}`}>
          <div className={style.MainSectionImage}>
            <TextAboveImage />
            <ButtonRegistrNow />
          </div>
        </div>
        <SectionTwoParag
          post1="100% учеников, использующих "
          post2=", говорят, что их успеваемость улучшилась"
          word="Flashcards"
        />
        <div className={style.section2}>
          <div className={style.sec2Left}>
            <Section2Left />
            <Section2Button />
          </div>
          <div>
            <Section2Right />
          </div>
        </div>
        <SectionTwoParag
          post1="Отзывы учеников о "
          post2=""
          word="Flashcards"
        />
        <div className={style.section3}>
          <Post
            pos={image1}
            text="“Flashcards помогает мне хорошо учиться еще со школьных времен. А карточки, доступные на ходу, — то, что очень выручает меня в университете”"
            rew="Милена, Москва"
          />
          <Post
            pos={image2}
            text="“Flashcards помог мне перейти от пассивного запоминания к активному. Благодаря этому я запоминаю информацию гораздо быстрее.”"
            rew="Александр, Казань"
          />
          <Post
            pos={image3}
            text="“Flashcards помог быстрее запоминать сложные термины. Благодаря интересной технике, учиться стало вдвойне интереснее!”"
            rew="Оля, Курск"
          />
        </div>
        <Footer />
      </section>
    </section>
  );
};

export default MainPage;
