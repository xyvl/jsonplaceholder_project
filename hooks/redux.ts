import { AppDispatch, RootSelector } from "@/store/store";
import { useDispatch, useSelector,TypedUseSelectorHook } from "react-redux";

export const customDispatch = () => useDispatch<AppDispatch>()
export const customSelector: TypedUseSelectorHook<RootSelector> = useSelector