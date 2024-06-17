"use client";

import { useFormStatus } from "react-dom";

const SaveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="py-3 px-5 border-2 border-green-400 text-green-400 text-sm rounded"
      type="submit"
    >
      {pending ? "Saving" : "Save"}
    </button>
  );
};

export default SaveButton;
