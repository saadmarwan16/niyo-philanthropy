import { toast } from "react-toastify";

const errorToast = (name: string, message: string, toastId: string) => {
  toast.error(
    <div>
      <p className="font-semibold leading-4">{name}</p>
      <p className="text-2xs">{message}</p>
    </div>,
    {
      toastId: toastId,
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};

export default errorToast;
