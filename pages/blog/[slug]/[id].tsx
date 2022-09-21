import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import SingleBlogDetails from "../../../src/modules/blog/components/SingleBlogDetails";
import blogController from "../../../src/modules/blog/controllers/blog_controller";
import { BlogModel } from "../../../src/modules/blog/data/models/blog_model";
import CustomLoader from "../../../src/shared/components/CustomLoader";
import ErrorContent from "../../../src/shared/components/ErrorContent";
import Header from "../../../src/shared/components/Header";
import Meta from "../../../src/shared/components/Meta";
import { ErrorModel } from "../../../src/shared/errors/error_model";

interface BlogDetailsPageProps {
  id: string;
  error: ErrorModel | null;
  blog: BlogModel | null;
}

const BlogDetails: NextPage<BlogDetailsPageProps> = (props) => {
  const [blog, setBlog] = useState(props.blog);
  const [error, setError] = useState(props.error);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Meta titlePrefix="Single Blog Details" />

      <div>
        <div className="header-section">
          <Header />
        </div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <>
            {blog ? (
              <SingleBlogDetails data={blog.data} />
            ) : (
              <ErrorContent
                title={`blog with id of #${props.id}`}
                errorName={error?.name}
                errorMessage={error?.message}
                setContent={() => {
                  setIsLoading(true);
                  blogController
                    .getOne(props.id)
                    .then((res) => {
                      const { error, blog } = res;
                      if (error) {
                        setError(error);
                      } else {
                        setBlog(blog);
                      }
                    })
                    .finally(() => setIsLoading(false));
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as string;
  const results = await blogController.getOne(id);

  return {
    props: {
      id,
      ...results,
    },
  };
};

export default BlogDetails;
