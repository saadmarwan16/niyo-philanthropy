import { FunctionComponent, useEffect } from "react";
import Header from "../../../shared/components/Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import styles from "../../../../styles/Home.module.css";
import Image from "next/image";

interface HomeMainHeroProps {
  title: string;
  description: string;
}

const HomeMainHero: FunctionComponent<HomeMainHeroProps> = ({
  title,
  description,
}) => {
  return (
    <div className="object-cover w-full min-h-screen carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <Image src="/images/image1.jpg" layout="fill" alt="Image 1" />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide3" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">Silence is not enough</h1>
                <span className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  atque laboriosam porro facere, facilis alias, maxime
                  repellendus eos, sequi tempore voluptas. Nemo voluptas
                  eligendi ipsam pariatur ad eos aut ex!
                </span>
                <Link href="#about-us">
                  <a className="custom-btn-secondary !w-fit">Learn more</a>
                </Link>
              </div>
            </div>
            <a href="#slide2" className="btn btn-circle">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <Image src="/images/image1.jpg" layout="fill" alt="Image 1" />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide1" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">Silence is not enough</h1>
                <span className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  atque laboriosam porro facere, facilis alias, maxime
                  repellendus eos, sequi tempore voluptas. Nemo voluptas
                  eligendi ipsam pariatur ad eos aut ex!
                </span>
                <Link href="#about-us">
                  <a className="custom-btn-secondary !w-fit">Learn more</a>
                </Link>
              </div>
            </div>
            <a href="#slide3" className="btn btn-circle">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <Image src="/images/image1.jpg" layout="fill" alt="Image 1" />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide2" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">Silence is not enough</h1>
                <span className="line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  atque laboriosam porro facere, facilis alias, maxime
                  repellendus eos, sequi tempore voluptas. Nemo voluptas
                  eligendi ipsam pariatur ad eos aut ex!
                </span>
                <Link href="#about-us">
                  <a className="custom-btn-secondary !w-fit">Learn more</a>
                </Link>
              </div>
            </div>
            <a href="#slide1" className="btn btn-circle">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainHero;
