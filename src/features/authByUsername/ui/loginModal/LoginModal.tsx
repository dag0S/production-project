import { FC } from "react";
import { Modal } from "shared/ui/modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../loginForm/LoginForm";
import { LoginModalProps } from "./LoginModalProps";

import styles from "./LoginModal.module.scss";

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      className={classNames("")}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
