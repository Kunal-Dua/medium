import { ChangeEvent } from "react";

interface LabledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent) => void;
  type?: string;
}

export const InputBox = ({
  label,
  placeholder,
  onChange,
  type,
}: LabledInputType) => {
  return (
    <div>
      <label className="pt-2 block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        id="first_name"
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
