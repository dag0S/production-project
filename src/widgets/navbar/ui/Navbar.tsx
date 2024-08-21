import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavbarProps } from "./NavbarProps";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/button/Button";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { LoginModal } from "features/authByUsername";
import { getUserAuthData, userActions } from "entities/user";

import styles from "./Navbar.module.scss";

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handlerOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, []);

  if (authData) {
    return (
      <div className={classNames(styles["navbar"], {}, [])}>
        <Button
          className={styles["links"]}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogout}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <Button
        className={styles["links"]}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handlerOpenModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};
