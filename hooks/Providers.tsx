'use client'
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({children}: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
