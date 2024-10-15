import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/storeProvider";
import { ArticleType, IArticle } from "entities/article";
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesListProps {
  page?: number;
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  FetchArticlesListProps,
  ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(thunkAPI.getState());
  const sort = getArticlesPageSort(thunkAPI.getState());
  const order = getArticlesPageOrder(thunkAPI.getState());
  const search = getArticlesPageSearch(thunkAPI.getState());
  const type = getArticlesPageType(thunkAPI.getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await thunkAPI.extra.api.get<IArticle[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        type_like: type === ArticleType.All ? undefined : type,
        q: search,
      },
    });

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error");
  }
});
