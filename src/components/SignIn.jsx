export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <form className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md mb-20 font-serif">
        <h2 className="text-gray-800 text-2xl mb-4 font-lobster text-center">
          Login
        </h2>

        <div className="mb-8 flex justify-center">
          <label className="block text-gray-700">E-mail:</label>
          <input
            type="text"
            className="form-input border border-gray-500 outline-none rounded-md p-2 w-3/5 ml-5"
            placeholder="E-mail"
          />
        </div>

        <div className="mb-8 flex justify-center">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            className="form-input border border-gray-500 outline-none rounded-md p-2 w-3/5 ml-2"
            placeholder="Password"
          />
        </div>

        <button
          type="button"
          className="bg-pink-200 text-white font-bold p-2 mt-2 rounded hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
