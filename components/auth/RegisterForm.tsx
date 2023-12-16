"use client";
import DOBField from "./form-fields/DOBField";
import Gender from "./form-fields/Gender";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RawUser, userSchema } from "@/lib/schemas";
import axios from "axios";
import { formatUser, handleApiErrors } from "@/lib/helpers";
import TextInput from "./form-fields/TextInput";
import EmailInput from "./form-fields/EmailInput";
import { SignupButton } from "../Buttons";
import PlaceholderData from "./PlaceholderData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(userSchema),
    mode: "all",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onSubmit = async (data: RawUser) => {
    clearErrors();
    const user = formatUser(data);
    try {
      const res = await axios.post("/api/auth/signup", user);
      const params = new URLSearchParams(searchParams);
      params.delete('form_type')
      params.set("email", res.data.user.email);
      router.push(`/confirmemail?${params.toString()}`);
    } catch (errors: any) {
      if (errors.response?.status === 403) {
        setError("email", {
          type: "custom",
          message: "Entered email is already register",
        });
        setError("emailDuplicate", { type: "custom", message: "Email Error!" });
        return false;
      }
      return handleApiErrors(errors);
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-[12px]">
        <div className="flex gap-3 h-fit ">
          <TextInput
            errors={errors}
            register={register}
            placeholder="First name"
            name="firstName"
          />

          <TextInput
            errors={errors}
            register={register}
            placeholder="Last name"
            name="lastName"
          />
        </div>

        <EmailInput errors={errors} register={register} />

        <TextInput
          errors={errors}
          register={register}
          placeholder="New password"
          name="password"
        />

        <DOBField errors={errors} register={register} />
        <Gender errors={errors} register={register} />

        <PlaceholderData />

        <SignupButton />
      </div>
    </form>
  );
}
