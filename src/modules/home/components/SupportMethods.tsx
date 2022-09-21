import Link from "next/link";
import { FunctionComponent } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import Routes from "../../../constants/routes";

interface SupportMethodsProps {}

const SupportMethods: FunctionComponent<SupportMethodsProps> = () => {
  return (
    <section className="flex flex-wrap items-center justify-start gap-16 py-6 sm:justify-center home-section-horizontal-padding bg-primary bg-opacity-10">
      <div className="flex items-center gap-6 w-fit">
        <BiDonateHeart className="text-2xl md:text-3xl" />
        <Link href={Routes.DONATE}>
          <a className="hover:text-primary">One Time Donation</a>
        </Link>
      </div>
      <div className="flex items-center gap-6 w-fit">
        <GiShoppingCart className="text-2xl md:text-3xl" />
        <a
          className="hover:text-primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeE46LOmWGRGtrYEqKdRVa16uUBa4SATnVZRx4nlH4VvOvZtg/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Buy Our Merch
        </a>
      </div>
      <div className="flex items-center gap-6 w-fit">
        <FaUsers className="text-2xl md:text-3xl" />
        <Link href={Routes.REGISTER}>
          <a className="hover:text-primary">Become a Member</a>
        </Link>
      </div>
    </section>
  );
};

export default SupportMethods;
