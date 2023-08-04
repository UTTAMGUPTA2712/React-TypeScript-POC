import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store/Store";

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const UseAppDispatch: () => AppDispatch = useDispatch;
