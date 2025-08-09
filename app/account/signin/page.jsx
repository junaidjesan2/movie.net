"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).max(7).required("Please enter valid password"),
});

const initialValue = {
  email: "",
  password: "",
};
function App() {
  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      const storedData = localStorage.getItem("data");

      if (!storedData) {
        alert("No account found. Please sign up first.");
        window.location.replace("/account/signup");
        return;
      }

      const data = JSON.parse(storedData);

      if (values.email === data.email && values.password === data.password) {
        const userData = {
          email: values.email,
          password: values.password,
        };
        localStorage.setItem("userData", JSON.stringify(userData)); 
        alert("Sign In Successfully");
        window.location.replace("/");
      } else {
        alert("Email and password do not match");
        window.location.replace("/account/signup");
      }
    },
  });
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="text-3xl text-[#6A64F1] font-semibold flex justify-center my-4">
          Complete Your last step
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="email"
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
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {<div className="text-red-600">{errors.email}</div>}
          </div>
          <div className="mb-5">
            <label
              for="password"
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
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {<div className="text-red-600">{errors.password}</div>}
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

export default App;
