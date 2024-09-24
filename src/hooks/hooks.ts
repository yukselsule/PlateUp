import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useLocalStorageState(
  initialState: string | number | string[] | number[],
  key: string
) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
