import { FunctionComponent } from "react";
import { MdOutlineHourglassEmpty } from "react-icons/md";

interface EmptyContentProps {
  title: string;
  content: string;
}

const EmptyContent: FunctionComponent<EmptyContentProps> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-2 py-4 text-center">
      <MdOutlineHourglassEmpty className="text-5xl sm:text-6xl md:text-8xl" />
      <div>
        <p className="mb-2 heading2">No {title} Content to Show</p>
        <p>Available {content} content would appear here</p>
      </div>
    </div>
  );
};

export default EmptyContent;
