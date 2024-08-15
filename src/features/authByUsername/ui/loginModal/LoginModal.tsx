import { FC } from "react";
import { Modal } from "shared/ui/modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../loginForm/LoginForm";
import { LoginModalProps } from "./LoginModalProps";

export const LoginModal: FC<LoginModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
