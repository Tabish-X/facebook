import { FaCircleExclamation } from "react-icons/fa6";

export default function ExcalamationIcon({ isError }: { isError: any }) {
    if (isError) {
      return (
        <span className="text-_error_color text-lg">
          <FaCircleExclamation />
        </span>
      );
    }
  }