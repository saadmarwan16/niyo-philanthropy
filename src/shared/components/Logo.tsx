import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import Routes from "../../constants/routes";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Link href={Routes.HOME}>
      <a>
        <div className="hidden lg:block">
          <Image src="/logos/logo4.png" width={200} height={70} alt="logo" />
        </div>

        <div className="block avatar lg:hidden">
          <div className="w-12 sm:w-16">
            <Image src="/logos/logo3.png" layout="fill" alt="logo" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
