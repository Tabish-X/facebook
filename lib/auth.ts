import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { User } from "@/models/userModel";

type state = {
  err: string | null;
  authenticated: boolean;
  user: User | null;
};

export default function auth(): state {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return { authenticated: false, user: null, err: "Token cannot be found" };
  }

  const tokenValue = token.value;
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
    throw new Error("Please put Jsonwebtoken secret in .env file");
  }

  let jwtError = false;
  let user;

  jwt.verify(tokenValue, secret, (err, data) => {
    if (err) {
      return (jwtError = true);
    }
    return (user = data);
  });

  if (jwtError) {
    return { err: null, authenticated: true, user: null };
  }

  return { err: null, authenticated: true, user: user || null};
}
