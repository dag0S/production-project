import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { DynamicModuleLoaderProps } from "./DynamicModuleLoaderProps";
import { ReduxStoreWithManager } from "app/providers/storeProvider";
import { StateSchemaKey } from "app/providers/storeProvider/config/StateSchema";

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // Добавляем новый редюсер только если его нет
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      Object.entries(reducers).forEach(([name]) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
  }, []);

  return children;
};
