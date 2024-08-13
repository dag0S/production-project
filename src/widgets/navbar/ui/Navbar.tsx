import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarProps } from "./NavbarProps";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { LoginModal } from "features/authByUsername";

import styles from "./Navbar.module.scss";

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handlerOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <Button
        className={styles["links"]}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handlerOpenModal}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
};
