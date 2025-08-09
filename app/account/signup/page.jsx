"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const FormSchema = Yup.object().shape({
  fName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(23, "First name too long")
    .required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password too long")
    .required("Password is required"),
});

const initialValue = {
  fName: "",
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
        let users = JSON.parse(localStorage.getItem("data")) || [];

        const userExists = users.some((user) => user.email === values.email);
        if (userExists) {
          alert("An account with this email already exists. Please sign in.");
          router.push("/account/signin");
          return;
        }

        const newUser = {
          fName: values.fName,
          email: values.email,
          password: values.password,
        };

        users.push(newUser);
        localStorage.setItem("data", JSON.stringify(users));
        localStorage.setItem("userData", JSON.stringify(newUser));

        alert("Sign Up Successful!");
        router.push("/");
      },
    });

  return (
    <div className="flex items-center justify-center p-4">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="text-3xl text-[#6A64F1] font-semibold flex justify-center my-4">
          Create Account!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fName}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.fName && touched.fName && (
              <div className="text-red-600 text-sm mt-1">{errors.fName}</div>
            )}
          </div>

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
