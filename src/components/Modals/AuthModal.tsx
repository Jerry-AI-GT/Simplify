import { authModalState } from "@/atoms/authModalAtom";
import React, { useEffect } from "react";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { useRecoilValue, useSetRecoilState } from "recoil";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const closeModal = useCloseModal();
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
        onClick={closeModal}
      ></div>
      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%]  flex justify-center items-center">
        <div className=" relative w-full h-full mx-auto flex items-center justify-center">
          <div className="rounded-lg shadow relative backdrop-blur-lg w-6.5 mx-6">
            <div className="flex justify-end p-2"></div>

            {authModal.type === "login" ? (
              <Login />
            ) : authModal.type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthModal;

function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState);

  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return closeModal;
}
