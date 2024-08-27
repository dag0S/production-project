import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/currency";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/select/Select";
import { CurrencySelectProps } from "./CurrencySelectProps";

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation("profile");

    const handlerOnChange = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите валюту")}
        options={options}
        value={value}
        onChange={handlerOnChange}
        readonly={readonly}
      />
    );
  }
);
