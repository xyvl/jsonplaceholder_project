"use client";
import styles from "./postItem.module.scss";
import { FC, useState } from "react";
import Comments from "../Comments/Comments";
import Logo from "../UI/Logo/Logo"

interface IProps {
  props: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const PostItem: FC<IProps> = ({ props }: IProps) => {
  const [comments, setComments] = useState(false);

  return (
    <div className="wrapper">
      <div className={styles.main}>
        <Logo/>
        <div className={styles.text}>
          <p className={styles.title}>
            {props.title}
          </p>
          <p className={styles.body}>{props.body}</p>
          <button onClick={() => setComments(!comments)} className={styles.dop}>
            {comments ? "Закрыть комментарии" : "Открыть комментарии"}
          </button>
          {comments ? <Comments props={props}/> : null}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
