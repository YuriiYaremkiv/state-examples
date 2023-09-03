import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../../app/providers/StoreProvider";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
