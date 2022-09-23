import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../../constants/routes";
import { variants2 } from "../../constants/variants";

interface MobileLoginRegisterButtonProps {}

const MobileLoginRegisterButton: FunctionComponent<
  MobileLoginRegisterButtonProps
> = () => {
  return (
    <motion.div className="flex justify-center gap-4 mb-8" variants={variants2}>
      <Link href={Routes.LOGIN}>
        <a className="custom-btn-secondary-outline btn-secondary">Login</a>
      </Link>
      <Link href={Routes.REGISTER}>
        <a className="custom-btn-secondary">Register</a>
      </Link>
    </motion.div>
  );
};

export default MobileLoginRegisterButton;
