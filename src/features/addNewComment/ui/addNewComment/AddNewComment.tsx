import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { AddNewCommentProps } from "./AddNewCommentProps";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/button/Button";
import {
  getAddNewCommentError,
  getAddNewCommentText,
} from "../../model/selectors/addNewCommentSelector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  addNewCommentActions,
  addNewCommentReducer,
} from "../../model/slices/addNewCommentSlice";
import { DynamicModuleLoader } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoader";
import { ReducersList } from "shared/lib/components/dynamicModuleLoader/DynamicModuleLoaderProps";

import styles from "./AddNewComment.module.scss";

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddNewComment: FC<AddNewCommentProps> = ({
  className,
  onSendComment,
}) => {
  const { t } = useTranslation();
  const text = useSelector(getAddNewCommentText);
  const error = useSelector(getAddNewCommentError);
  const dispatch = useAppDispatch();

  const handlerOnCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    handlerOnCommentTextChange("");
  }, [onSendComment, text, handlerOnCommentTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles["add-new-comment"], {}, [className])}>
        <Input
          className={styles["add-new-comment__input"]}
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={handlerOnCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t("Отправить")}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddNewComment;
