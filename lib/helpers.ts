import toast from "react-hot-toast";
import { RawUser } from "./schemas";

export function generateOtp(): number {
  let otp = "";
  for (let i = 0; i <= 9; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return Number(otp);
}

export async function sendVerificationMail(): Promise<any> {}

export function formatUser(user: RawUser) {
  let pronoun =
    user.gender === "male"
      ? "He/Him"
      : user.gender === "female"
      ? "He/Him"
      : user.pronoun;
  const userData = {
    ...user,
    birthday: `${user.day}/${user.month}/${user.year}`,
    pronoun: pronoun,
  };

  return userData;
}

export function handleApiErrors(errors: any) {
  if (errors.response) {
    if (errors.response.data?.status === 500) {
      console.error(
        "Error code: 500. Internal Server Error, something went wrong",
        errors.response.data.error
      );
      throw new Error("Error code: 500. Internal Server Error");
    } else {
      if (errors.response.data.message) {
        toast.error(errors.response.data.message);
        return false;
      } else {
        console.log("Failed to catch error");
        ;
      }
    }
  } else {
    console.error(errors.message);
    throw new Error("Something went wrong");
  }
}
