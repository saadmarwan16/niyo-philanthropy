import { FunctionComponent, useMemo } from "react";
import { Datum } from "../data/models/blogs_model";
import Image from "next/image";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { BASE_URL } from "../../../constants/urls";

interface BlogProps {
  blog: Datum;
}

const Blog: FunctionComponent<BlogProps> = ({ blog }) => {
  const { category, introduction, time_to_read, title, body } = blog.attributes;
  const image = blog.attributes.image.data?.attributes.url;

  return (
    <div className="shadow-xl card card-compact bg-base-100">
      <div className="avatar">
        <div className="w-full h-48 rounded-lg sm:h-56">
          <Image
            src={image ? `${BASE_URL}${image}` : "/images/no_image.jpg"}
            alt="Shoes"
            layout="fill"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="flex items-center gap-2 text-base bg-base-200 px-2 py-0.5 rounded-lg w-fit">
          <small>{category.data?.attributes.title ?? "No Category"}</small>
          <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
          <small>{time_to_read} min read</small>
        </div>
        <h2 className="card-title line-clamp-1">{title}</h2>
        <p className="line-clamp-3">{introduction ?? body}</p>
        <div className="justify-end mt-2 card-actions">
          <Link
            href={Routes.BLOG_DETAILS("this-is-the-title", blog.id.toString())}
          >
            <a className="custom-btn-secondary">Read Article</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
