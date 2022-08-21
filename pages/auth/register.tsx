import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";

interface RegisterPageProps {}

const Register: NextPage<RegisterPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Register" />

      <main>Register View is working</main>
    </div>
  );
};

export default Register;
