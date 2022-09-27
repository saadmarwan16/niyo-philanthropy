import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../../../constants/routes";

interface AuthModalProps {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
}

const AuthModal: FunctionComponent<AuthModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id="auth-modal"
        checked={isModalOpen}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative modal-box">
          <label
            className="absolute btn btn-sm btn-circle right-2 top-2 btn-secondary"
            onClick={setIsModalOpen}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Login Required!</h3>
          <p className="py-4">To perform this operation you must first login</p>
          <div className="modal-action">
            <Link href={Routes.LOGIN}>
              <a className="custom-btn-secondary-outline btn-secondary">
                Login
              </a>
            </Link>
            <Link href={Routes.REGISTER}>
              <a className="custom-btn-secondary">Register</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
