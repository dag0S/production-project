import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { NavbarProps } from "./NavbarProps";
import { Button } from "shared/ui/button/Button";

import styles from "./Navbar.module.scss";
import { ButtonTheme } from "shared/ui/button/ButtonProps";
import { Modal } from "shared/ui/modal/Modal";

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handlerToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles["navbar"], {}, [])}>
      <Button
        className={styles["links"]}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handlerToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={handlerToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        ipsum! Et, officiis minima ab tempora consectetur voluptatibus, eligendi
        excepturi temporibus dignissimos reprehenderit sed perspiciatis dolorum
        dolorem voluptate! Fugiat, voluptate eos!
      </Modal>
    </div>
  );
};
