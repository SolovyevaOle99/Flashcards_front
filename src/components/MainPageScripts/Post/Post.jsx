import React from "react";
import style from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={style.post}>
            <div>
                <img src={props.pos} alt=""></img>
            </div>
            <div>
                <p className={style.p1}> {props.text}</p>
                <p className={style.p2}>{props.rew}</p>
            </div>
        </div>
    );
}

export default Post;