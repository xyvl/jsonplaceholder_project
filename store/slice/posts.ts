import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IInitialState {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { dispatch }) => {
    let data: IInitialState[] = (
      await axios.get(`${process.env.NEXT_PUBLIC_URL_ALL_POST}`)
    ).data;
    data = await data.filter((el: IInitialState) => el.body.split("\n").join());
    dispatch(addAllPosts(data));
  }
);

export const filterPosts = createAsyncThunk(
  "posts/filterPosts",
  async (text: string, { dispatch }) => {
    let data: IInitialState[] = (
      await axios.get(`${process.env.NEXT_PUBLIC_URL_ALL_POST}`)
    ).data;
    data = await data.filter((el: IInitialState) => el.body.split("\n").join());
    data = data.filter((el) => {
      if (el.title.indexOf(text) !== -1) {
        return el;
      }
    });

    dispatch(addAllPosts(data));
  }
);

export const sortPosts = createAsyncThunk(
  "posts/sortPosts",
  async (props: { value: number; arr: IInitialState[] }, { dispatch }) => {
    let finallyArray: IInitialState[] = [];
    let newArray: string[] | number[];

    switch (props.value) {
      case 1:
        console.log(props.arr.length);
        newArray = props.arr.map((el) => el.id).sort((a, b) => a - b);

        for (let i = 0; i < newArray.length; i++) {
          for (let j = 0; j < newArray.length; j++) {
            if (props.arr[j].id == newArray[i]) finallyArray.push(props.arr[j]);
          }
        }

        dispatch(addAllPosts(finallyArray));

        break;
      case 2:
        console.log(props.arr.length);
        newArray = props.arr.map((el) => el.title).sort();

        for (let i = 0; i < newArray.length; i++) {
          for (let j = 0; j < newArray.length; j++) {
            if (props.arr[j].title == newArray[i])
              finallyArray.push(props.arr[j]);
          }
        }

        dispatch(addAllPosts(finallyArray));
        break;
      case 3:
        console.log(props.arr.length);
        newArray = props.arr.map((el) => el.title).sort().reverse();

        for (let i = 0; i < newArray.length; i++) {
          for (let j = 0; j < newArray.length; j++) {
            if (props.arr[j].title == newArray[i])
              finallyArray.push(props.arr[j]);
          }
        }

        dispatch(addAllPosts(finallyArray));
        break;
      default:
        dispatch(addAllPosts(props.arr));
    }
  }
);

const initialState: IInitialState[] | false = false;

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addAllPosts(state, action) {
      return action.payload;
    },
  },
});

export default posts.reducer;
export const { addAllPosts } = posts.actions;
