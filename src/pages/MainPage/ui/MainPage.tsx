import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/input/Input";

const MainPage: FC = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const handlerChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t("Главная страница")}
      <div>
        <Input
          onChange={handlerChange}
          value={value}
          placeholder="Введите текст"
        />
      </div>
    </div>
  );
};

export default MainPage;
