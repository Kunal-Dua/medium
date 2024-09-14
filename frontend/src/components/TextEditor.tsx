import { ChangeEvent } from "react";

export const TextEditor=({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void})=> {
  return (
    <div className="pt-10">
      <textarea
      onChange={onChange}
        rows={8}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      
    </div>
  );
};
