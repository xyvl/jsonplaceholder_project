"use client";
import Header from "@/components/Header/Header";
import PostItem from "@/components/PostItem/PostItem";
import SearchPost from "@/components/SearchPost/SearchPost";
import Tabulation from "@/components/Tabulation/Tabulation";
import { customDispatch, customSelector } from "@/hooks/redux";
import { getAllPosts } from "@/store/slice/posts";
import { useLayoutEffect, useRef, useState } from "react";

interface IPostsArray {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [value, setValue] = useState<number>(1);
  const dispatch = customDispatch();
  const loading = customSelector((state) => state.allPosts);

  useLayoutEffect(() => {
    dispatch(getAllPosts());
  }, []);

  let postsArray: any = [];
  postsArray = customSelector((state) => state.allPosts);

  return (
    <>
      <Header />
      <SearchPost setValue={setValue}/>
      {typeof loading == "object" ? (
        <>
          {postsArray.length > 0 ? (
            <>
              {postsArray.map((el: IPostsArray) => {
                const newArray: IPostsArray[] = [];
                for (let i = (value - 1) * 20; i < value * 20; i++) {
                  newArray.push(postsArray[i]);
                }
                for (let i = 0; i < newArray.length; i++) {
                  if (newArray[i].title === el.title)
                    return <PostItem key={el.id} props={el} />;
                }
              })}
            </>
          ) : (
            <p className="text-center mt-5 text-2xl">ничего не найдено</p>
          )}
        </>
      ) : (
        <p className="text-center mt-5 text-2xl">Loading...</p>
      )}
      <Tabulation
        value={value}
        numberElement={postsArray.length / 20}
        setValue={setValue}
      />
    </>
  );
}
