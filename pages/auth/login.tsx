import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";

interface LoginPageProps {}

const Login: NextPage<LoginPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Login" />

      <main>Login View is working</main>
    </div>
  );
};

export default Login;
