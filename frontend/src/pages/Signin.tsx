import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@kdxdevs/medium-common";
import axios from "axios";
import { Quote } from "../components/Quote";
import { InputBox } from "../components/InputBox";

export const Signin = () => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      console.log(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );

      const token = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      alert("Error while sign in " + e);
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div>
              <div className="px-10">
                <div className="text-3xl font-extrabold">Sign in</div>
                <div className="text-xl text-slate-400">
                  Don't have an account?
                  <Link className="pl-2 underline" to={"/signup"}>
                    {"Sign up"}
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <InputBox
                  label="Username"
                  placeholder="John@gmail.com"
                  onChange={(e) => {
                    setPostInputs({ ...postInputs, username: e.target.value });
                  }}
                />

                <InputBox
                  label="Password"
                  placeholder=""
                  type="password"
                  onChange={(e) => {
                    setPostInputs({ ...postInputs, password: e.target.value });
                  }}
                />

                <button
                  onClick={sendRequest}
                  type="button"
                  className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
