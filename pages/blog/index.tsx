import type { GetServerSideProps, NextPage } from "next";
import Header from "../../src/shared/components/Header";
import Meta from "../../src/shared/components/Meta";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import blogsController from "../../src/modules/blog/controllers/blogs_controller";
import { ErrorModel } from "../../src/shared/errors/error_model";
import { BlogsModel } from "../../src/modules/blog/data/models/blogs_model";
import { useMemo, useState } from "react";
import Blog from "../../src/modules/blog/components/Blog";
import CustomLoader from "../../src/shared/components/CustomLoader";
import ErrorContent from "../../src/shared/components/ErrorContent";
import HeroBlog from "../../src/modules/blog/components/HeroBlog";
import getPaginationCursors from "../../src/shared/utils/getPaginationCursors";

interface BlogsPageProps {
  error: ErrorModel | null;
  blogs: BlogsModel | null;
}

const Blogs: NextPage<BlogsPageProps> = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);
  const [error, setError] = useState(props.error);
  const [isLoading, setIsLoading] = useState(false);
  const pagination = useMemo(() => {
    if (!blogs) return null;

    const { page, total, pageSize } = blogs.meta.pagination;
    const pagination = getPaginationCursors(page, blogs.data.length, pageSize);

    return {
      ...pagination,
      total,
    };
  }, [blogs]);

  return (
    <>
      <Meta titlePrefix="Blog" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {blogs ? (
              <main>
                <HeroBlog
                  blog={
                    blogs.data[Math.floor(Math.random() * blogs.data.length)]
                  }
                />
                <div className="flex flex-col gap-4 py-16 sm:gap-6 md:gap-8 blog-campaign-horizontal-padding">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h1 className="heading1">Blog</h1>
                      <p className="text-gray-500">
                        Read articles from different categories
                      </p>
                    </div>
                    <span className="px-2 py-0.5 md:py-1 sm:px-3 md:px-4 border border-gray-500 rounded-lg text-sm sm:text-base w-fit">
                      {pagination?.startingCursor} - {pagination?.endingCursor}{" "}
                      of {pagination?.total}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {blogs.data.map((blog) => (
                      <Blog key={blog.id} blog={blog} />
                    ))}
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className={`custom-btn-secondary-square ${
                        blogs.meta.pagination.page <= 1 && "!btn-disabled"
                      }`}
                    >
                      <IoIosArrowBack className="sm:text-xl" />
                    </button>
                    <span className="h-full p-4 text-xl">1</span>
                    <button
                      className={`custom-btn-secondary-square ${
                        blogs.meta.pagination.page >=
                          blogs.meta.pagination.pageCount && "!btn-disabled"
                      }`}
                    >
                      <IoIosArrowForward className="sm:text-xl" />
                    </button>
                  </div>
                </div>
              </main>
            ) : (
              <ErrorContent
                title="categories"
                errorName={error?.name}
                errorMessage={error?.message}
                setContent={() => {
                  setIsLoading(true);
                  blogsController
                    .getAll()
                    .then((res) => {
                      const { error, blogs } = res;
                      if (error) {
                        setError(error);
                      } else {
                        setBlogs(blogs);
                      }
                    })
                    .finally(() => setIsLoading(false));
                }}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const results = await blogsController.getAll();

  return {
    props: results,
  };
};

export default Blogs;
