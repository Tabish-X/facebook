import { FaCaretUp, FaCircleExclamation } from "react-icons/fa6";

export default function RegisterError({ error, focus }: { error: string, focus: boolean }) {
  if (!error) {
    return;
  }
  return (
    <>
      <span className="text-_error_color text-lg">
        <FaCircleExclamation />
      </span>

      {
        focus && error ? (
          <div className="hidden lg:block absolute top-14 left-0 w-full p-2 bg-_error_color rounded-md shadow-sm shadow-black text-white text-sm z-10">
        <p>What's your name</p>
        <span className="text-_error_color text-4xl absolute -top-5 left-4">
          <FaCaretUp />
        </span>
      </div>
        ): (
          ""
        )
      }
      
    </>
  );
}
