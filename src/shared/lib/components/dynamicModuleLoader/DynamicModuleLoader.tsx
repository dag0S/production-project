import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  DynamicModuleLoaderProps,
  ReducersListEntry,
} from "./DynamicModuleLoaderProps";
import { ReduxStoreWithManager } from "app/providers/storeProvider";

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    return () => {
      Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
  }, []);

  return children;
};
