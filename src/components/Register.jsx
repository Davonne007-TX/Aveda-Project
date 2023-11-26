export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <form className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md mb-20 font-serif">
        <h2 className="text-gray-800 text-2xl mb-4 font-lobster text-center">
          Become a member today
          <br />
          Sign up below
        </h2>

        <div className="flex">
          <div className="w-1/2 pr-4">
            {/* First Column */}
            <div className="mb-8">
              <label className="block text-gray-700">First Name:</label>
              <input
                type="text"
                className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                placeholder="First Name"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="w-1/2 pl-4">
            {/* Second Column */}
            <div className="mb-8">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                placeholder="Password"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700">E-mail:</label>
              <input
                type="text"
                className="form-input border border-gray-500 outline-none rounded-md p-2 w-full"
                placeholder="E-mail"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-pink-200 text-white font-bold p-2 mt-2 rounded hover:text-black w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
