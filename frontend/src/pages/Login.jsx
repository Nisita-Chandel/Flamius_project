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
    <form onSubmit={submitHandler}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
};

export default Login;
