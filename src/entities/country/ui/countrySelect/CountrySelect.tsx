import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Country } from "../../model/types/country";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/select/Select";
import { CountrySelectProps } from "./CurrencySelectProps";

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USA, content: Country.USA },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = memo(
  ({ className, value, onChange, readonly }) => {
    const { t } = useTranslation("profile");

    const handlerOnChange = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames("", {}, [className])}
        label={t("Укажите страну")}
        options={options}
        value={value}
        onChange={handlerOnChange}
        readonly={readonly}
      />
    );
  }
);
