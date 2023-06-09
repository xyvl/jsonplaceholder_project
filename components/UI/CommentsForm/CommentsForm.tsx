import { FC } from "react"
import styles from "./commentsForm.module.scss";
import Logo from "../Logo/Logo"

interface IProps {
	props:{
		postId: number;
		id: number;
		name: string;
		email: string;
		body: string;
	}
}

const CommentsForm: FC<IProps> = ({props}) => {

  return (
    <div className={styles.main}>
      <Logo/>
      <div className={styles.text}>
        <p className={styles.title}>{props.email}</p>
        <p className={styles.body}>{props.body}</p>
      </div>
    </div>
  );
};

export default CommentsForm;
