import React from "react";
import UseAuth from "../Hooks/UseAuth";

const Google = () => {
  const { googleSignIn } = UseAuth();

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      console.log(res);
    });
  };
  return (
    <button class="flex items-center justify-center w-full px-4 py-2 my-3 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
      <span class="google-icon w-6 h-6 mr-2">
        <span class="text-white text-lg">G</span>
      </span>
      <p onClick={handleGoogleSignIn}> Sign in with Google</p>
    </button>
  );
};

export default Google;
