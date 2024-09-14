import { Quote } from "../components/Quote";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignupInput } from "@kdxdevs/medium-common";
import { InputBox } from "../components/InputBox";
import axios from "axios";

export const Signup = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const token = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up" + e);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div>
              <div className="px-10">
                <div className="text-3xl font-extrabold">
                  Create an Acccount
                </div>
                <div className="text-xl text-slate-400">
                  Already have an account
                  <Link className="pl-2 underline" to={"/signin"}>
                    {"Sign in"}
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <InputBox
                  label="Name"
                  placeholder="John"
                  onChange={(e) => {
                    setPostInputs({ ...postInputs, name: e.target.value });
                  }}
                />

                <InputBox
                  label="Username"
                  placeholder="John@gmail.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                  {"Sign Up"}
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
