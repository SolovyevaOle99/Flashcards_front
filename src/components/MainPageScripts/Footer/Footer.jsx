import React from "react";
import style from "./Footer.module.css";
import telegr from '../../../img/telegramm.png';
import skype from "../../../img/skype.png";
import vk from "../../../img/vk.png";
import inst from "../../../img/instagramm.png";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                <img src={telegr} alt="telegramm"></img>
                <img src={skype} alt="skype"></img>
                <img src={vk} alt="vk"></img>
                <img src={inst} alt="instagramm"></img>
            </div>
            <p>© 2022 Flashcardst Inc.</p>
        </div>
    );
}

export default Footer;