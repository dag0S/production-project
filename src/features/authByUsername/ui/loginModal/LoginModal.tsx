import { FC, Suspense } from "react";
import { Modal } from "shared/ui/modal/Modal";
import { classNames } from "shared/lib/classNames/classNames";
import { LoginFormAsync } from "../loginForm/LoginForm.async";
import { LoginModalProps } from "./LoginModalProps";
import { Loader } from "shared/ui/loader/Loader";

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
