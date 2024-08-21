import { StateSchema } from "app/providers/storeProvider";

export const getLoginIsLoading = (state: StateSchema) => state?.loginFrom?.isLoading || false;
