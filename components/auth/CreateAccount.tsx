import RegisterForm from "./RegisterForm";
import CloseForm from "./form-fields/CloseForm";

export default function CreateAccount() {
  return (
    <section
      id="account_create"
      className="absolute top-0 left-0 w-full h-fit flex items-center justify-center overflow-y-auto "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />

      {/* main div  */}
      <div className="mt-12 mb-10 z-10">
      <div className="bg-white w-[432px] rounded-md shadow ">
        <div className="border-b px-4 py-3 w-full relative">
          <h3 className="text-3xl font-bold ">Sign Up</h3>
          <p className="text-gray-500">It's quick and easy.</p>
          <CloseForm/>
        </div>

        <RegisterForm />
      </div>
      </div>
    </section>
  );
}
