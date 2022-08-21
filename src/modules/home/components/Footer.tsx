import { FunctionComponent } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Routes from "../../../constants/routes";

interface FooterProps {
  description: string;
  phone_number: string;
  email: string;
  physical_address: string;
}

const Footer: FunctionComponent<FooterProps> = ({
  description,
  email,
  phone_number,
  physical_address,
}) => {
  return (
    <section className="flex flex-col gap-12 py-16 text-white home-section-horizontal-padding bg-slate-900">
      <div className="grid grid-cols-2 gap-16 lg:gap-6 xl:gap-16 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        <div className="flex flex-col col-span-2 gap-5 sm:col-span-4 md:col-span-6 lg:col-span-3 sm:gap-8">
          <Link href={Routes.HOME}>
            <a className="w-fit">
              <Image
                src="/logos/logo4.png"
                width={200}
                height={70}
                alt="logo"
              />
            </a>
          </Link>

          <p className="w-full md:w-4/5 lg:w-2/3">{description}</p>
          <div className="flex gap-4">
            <a
              className="bg-red-500 footer-social-link"
              href="https://www.youtube.com/watch?v=5xBmfvEbPR0"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillYoutube />
            </a>
            <a
              className="bg-pink-500 footer-social-link"
              href="https://www.instagram.com/niyo_philanthropy/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="bg-blue-700 footer-social-link"
              href="https://www.linkedin.com/in/jean-lambert-niyomugaba-97907b10b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-2 sm:gap-3 md:gap-4">
          <h2 className="heading3">Menu</h2>
          <NavLinks />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-2 sm:gap-3 md:gap-4">
          <h2 className="heading3">Categories</h2>
          <p>Human</p>
          <p>Medicine</p>
          <p>Study</p>
          <p>Food</p>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-2 sm:gap-3 md:gap-4">
          <h2 className="heading3">About Us</h2>
          <p>{phone_number}</p>
          <p>{email}</p>
          <p>{physical_address}</p>
        </div>
      </div>

      <p className="text-center">
        @Copyright <span className="text-accent-focus">Niyo Philanthropy</span>.
        All rights reserved
      </p>
    </section>
  );
};

export default Footer;
