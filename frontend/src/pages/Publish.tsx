import { AppBar } from "../components/AppBar";
import { TextEditor } from "../components/TextEditor";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full">
          <div className="pt-10">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Title"
            />
          </div>
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div className="pt-6">
            <button
              onClick={async () => {
                const response = await axios.post(
                  `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,
                  {
                    title: title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${response.data.id}`);
              }}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 "
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
