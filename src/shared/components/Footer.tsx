import { FunctionComponent } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Routes from "../../constants/routes";
import { Footer } from "../../modules/home/data/models/home_page_model";

interface FooterProps {
  data: Footer;
}

const Footer: FunctionComponent<FooterProps> = ({ data }) => {
  return (
    <footer className="flex flex-col gap-12 py-16 text-white home-section-horizontal-padding bg-slate-900">
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

          <p className="w-full md:w-4/5 lg:w-2/3">
            Niyo Philanthropy is a non-profit organization that collaborates
            with CHANGE-MAKERS to provide support to those in need. You TOO can
            be of great help
          </p>
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
          <p>{data.phone}</p>
          <p>{data.email}</p>
          <p>{data.address}</p>
        </div>
      </div>

      <p className="text-center">
        @Copyright <span className="text-accent-focus">Niyo Philanthropy</span>.
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
