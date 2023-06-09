import React, { FC } from "react";
import AboutUser from "@/components/AboutUser/AboutUser"
import Header from "@/components/Header/Header"
import axios from "axios"
import PostItem from "@/components/PostItem/PostItem"
interface IProps {
  params: {
    id: string;
  };
}
interface IPostsArray {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const page: FC<IProps> = async ({ params }) => {
  const data: IPostsArray[] = (await axios.get(`${process.env.NEXT_PUBLIC_URL_ALL_POST}?userId=${params.id}`)).data;
  console.log(data)
  return (
    <>
    <Header/>
		<AboutUser id={params.id}/>
    {
      data.map(el => <PostItem props={el}/>)
    }
		</>
  );
};

export default page;
