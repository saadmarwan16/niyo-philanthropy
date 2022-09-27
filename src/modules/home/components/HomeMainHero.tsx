import { FunctionComponent, useEffect } from "react";
import Header from "../../../shared/components/Header";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { HeroDetails } from "../data/models/home_page_model";
import { BASE_URL } from "../../../constants/urls";

interface HomeMainHeroProps {
  details: HeroDetails;
}

const HomeMainHero: FunctionComponent<HomeMainHeroProps> = ({ details }) => {
  const { detail1, detail2, detail3 } = details;
  return (
    <div className="object-cover w-full min-h-screen carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <Image
          src={`${BASE_URL}${detail1.hero_image.data?.attributes.url!}`}
          layout="fill"
          alt="Image 1"
        />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide3" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">{detail1.title}</h1>
                <span className="line-clamp-3">{detail1.description}</span>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary">
                    1
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    2
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    3
                  </span>
                </div>
              </div>
            </div>
            <a href="#slide2" className="btn btn-circle">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <Image
          src={`${BASE_URL}${detail2.hero_image.data?.attributes.url!}`}
          layout="fill"
          alt="Image 1"
        />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide1" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">{detail2.title}</h1>
                <span className="line-clamp-3">{detail2.description}</span>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    1
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary">
                    2
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    3
                  </span>
                </div>
              </div>
            </div>
            <a href="#slide3" className="btn btn-circle">
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <Image
          src={`${BASE_URL}${detail3.hero_image.data?.attributes.url!}`}
          layout="fill"
          alt="Image 1"
        />
        <div className="absolute flex flex-col justify-between h-full p-5 text-white bg-black bg-opacity-40">
          <Header />

          <div className="flex items-center justify-between flex-grow w-full">
            <div className="flex items-center gap-4 md:gap-8 lg:gap-10">
              <a href="#slide2" className="btn btn-circle">
                <AiOutlineArrowLeft />
              </a>
              <div className="flex flex-col w-full gap-6 md:w-4/5 lg:w-3/5 xl:w-1/2">
                <h1 className="heading1">{detail3.title}</h1>
                <span className="line-clamp-3">{detail3.description}</span>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    1
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full border-base-100">
                    2
                  </span>
                  <span className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-primary">
                    3
                  </span>
                </div>
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
