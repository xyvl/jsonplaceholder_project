"use client";
import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";
import CommentsForm from "../UI/CommentsForm/CommentsForm";

interface IProps {
  props: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}
interface IArrayComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface IComments {
  current: IArrayComments[];
}

const Comments: FC<IProps> = ({ props }) => {
  const [getComments, setGetComments] = useState(false);
  const data: IComments = useRef([]);
  const getIdComments = async () => {
    data.current = (
      await axios.get(
        `${process.env.NEXT_PUBLIC_URL_ALL_COMMENTS}?postId=${props.id}`
      )
    ).data;
    setGetComments(true);
  };
  useEffect(() => {
    setTimeout(getIdComments, 500);
  }, []);

  return (
    <>
      {getComments ? (
        <>
          {data.current.map((el) => (
            <CommentsForm key={el.id} props={el} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Comments;
