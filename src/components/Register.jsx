import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const inputtedEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputtedName = (e) => {
    setName(e.target.value);
  };

  //handel submit
  const handelSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(
      `Thank you ${name}, for becoming a member at Ava's! Your first visit is on us!`
    );
    alert(`Sign Up Successful, confirmation has been sent to ${email}`);
    navigate("/account");
  };
  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-pink-200">
        <form
          className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md mb-20 font-serif"
          onSubmit={handelSubmit}
        >
          <h2 className="text-gray-800 text-2xl mb-4 font-lobster text-center">
            Become a member today
            <br />
            Sign up below
          </h2>

          {/*labels and inputs */}
          <div className="flex">
            <div className="w-1/2 pr-4">
              <div className="mb-8">
                <label className="block text-gray-700">First & Last Name</label>
                <input
                  type="text"
                  className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                  placeholder="Name"
                  value={name}
                  onChange={inputtedName}
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="w-1/2 pl-4">
              <div className="mb-8">
                <label className="block text-gray-700">Username:</label>
                <input
                  type="text"
                  className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                  placeholder="Username"
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700">E-mail:</label>
                <input
                  type="text"
                  className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                  placeholder="E-mail"
                  value={email}
                  onChange={inputtedEmail}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-200 text-white font-bold p-2 mt-2 rounded hover:text-black w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
