import API from "../api/api";

const Login = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-[350px] transition-transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to Flamius 🍽️
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 
                     text-white py-2 rounded-lg font-semibold
                     hover:from-blue-600 hover:to-blue-700 
                     hover:shadow-lg transition-all duration-300"
        >
          Login
        </button>

        {/* Extra */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Forgot password?{" "}
          <a
            href="/forgot-password"
            className="text-blue-500 hover:underline"
          >
            Reset here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
