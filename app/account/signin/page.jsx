"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const FormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password required"),
});

const initialValue = {
  email: "",
  password: "",
};

export default function App() {
  const router = useRouter();

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValue,
      validationSchema: FormSchema,
      onSubmit: (values) => {
        const storedData = localStorage.getItem("data");
        if (!storedData) {
          alert("No account found. Please sign up first.");
          router.push("/account/signup");
          return;
        }

        const users = JSON.parse(storedData);

        if (!Array.isArray(users) || users.length === 0) {
          alert("No user data available.");
          router.push("/account/signup");
          return;
        }

        const matchedUser = users.find(
          (user) =>
            user.email === values.email && user.password === values.password
        );

        if (matchedUser) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              email: matchedUser.email,
              fName: matchedUser.fName,
            })
          );
          alert("Sign In Successfully");
          router.push("/");
        } else {
          alert("Email or password is incorrect.");
          router.push("/account/signup");
        }
      },
    });

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="text-3xl text-[#6A64F1] font-semibold flex justify-center my-4">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.email && touched.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.password && touched.password && (
              <div className="text-red-600 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
