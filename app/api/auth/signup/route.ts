import connectToDatabase from "@/lib/db";
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Creating an api end point for user signup...
// href= http://localhost:3000/api/auth/signup
// method= post
export async function POST(req: Request) {
  // getting form data...
  const user = await req.json();
  const { firstName, lastName, email, password, birthday, gender, pronoun } =
    user;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !birthday ||
    !gender ||
    !pronoun
  ) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  } // checking if there are empty fields...

  try {
    // mongodb connection...
    await connectToDatabase();

    // checking if user email has already been registered...
    const isEmailExists = await userModel.findOne({ email });
    if (isEmailExists) {
      return NextResponse.json(
        { message: "Entered email is already registered" },
        { status: 403 }
      );
    }

    // finally creating user...
    const createUser = await userModel.create(user);

    // creating a user response...
    const response = NextResponse.json(
      { user: createUser, message: "Signed up successfully" },
      { status: 201 }
    );

    // creating a user token...
    const token = jwt.sign(user, process.env.JWT_SECRET as string, {
      expiresIn: "1hr",
    });

    // returning a final response...
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    // catching if there are any server errors...
    console.error(error);
    return NextResponse.json(
      { error, message: "Internal Server" },
      { status: 500 }
    );
  }
}
