import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  const inputtedUsername = (e) => {
    setUserName(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log(userName);
    alert(`Welcome ${userName}!`);
    navigate("/account");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <form
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md mb-20 font-serif"
        onSubmit={handelSubmit}
      >
        <h2 className="text-gray-800 text-2xl mb-4 font-lobster text-center">
          Login
        </h2>

        <div className="mb-8 flex justify-center ">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={userName}
            className=" border border-gray-500 outline-none rounded-md p-2 w-3/5 ml-2"
            placeholder="Enter Username"
            onChange={inputtedUsername}
          />
        </div>

        <div className="mb-8 flex justify-center">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            className="border border-gray-500 outline-none rounded-md p-2 w-3/5 ml-2"
            placeholder="Enter Password"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-200 text-white font-bold p-2 mt-2 rounded hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
