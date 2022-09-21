import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Image from "next/image";
import Header from "../../src/shared/components/Header";

interface BlogDetailsPageProps {}

const BlogDetails: NextPage<BlogDetailsPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Single Blog Details" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        <main className="!py-8 sm:!py-12 md:!py-16 main-section">
          <div className="flex flex-col items-center w-full gap-8 mx-auto sm:gap-12 md:gap-16 sm:w-5/6 lg:w-4/6">
            <div className="flex flex-col w-full gap-2 text-center sm:gap-3 md:gap-4 sm:4/5 md:w-2/3 lg:w-3/5">
              <div className="flex items-center justify-center gap-3 text-center">
                <span className="font-semibold">Medicine</span>
                <span className="w-1 h-1 bg-gray-800 rounded-lg"></span>
                <span className="font-semibold">8 min read</span>
              </div>
              <h1 className="heading1 !font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h1>
              <span className="text-gray-500">Published on Aug 3, 2022</span>
            </div>
            <div className="w-full lg:w-4/5 avatar">
              <div className="w-full !aspect-[2/1] sm:!aspect-[5/2] lg:!aspect-[5/2]">
                <Image
                  src={"/images/image1.jpg"}
                  alt=""
                  layout="fill"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-8 sm:w-4/5 lg:w-2/3 xl:w-3/5">
              <div>
                <h2 className="mb-2 heading2">Introduction</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur dolore, quia explicabo dolores distinctio quos
                  earum quam ullam architecto eos, mollitia maxime ut, esse
                  laboriosam expedita aperiam. Itaque, similique dolorem!
                </p>
              </div>
              <div>
                <h2 className="mb-2 heading2">Body</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur dolore, quia explicabo dolores distinctio quos
                  earum quam ullam architecto eos, mollitia maxime ut, esse
                  laboriosam expedita aperiam. Itaque, similique dolorem!
                </p>
              </div>
              <div>
                <h2 className="mb-2 heading2">Conclusion</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur dolore, quia explicabo dolores distinctio quos
                  earum quam ullam architecto eos, mollitia maxime ut, esse
                  laboriosam expedita aperiam. Itaque, similique dolorem!
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h2 className="heading2">Found this story interesting?</h2>
                <span className="text-gray-500">
                  Support the stories you find touching
                </span>
              </div>
              <button className="custom-btn-secondary">Donate Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetails;
