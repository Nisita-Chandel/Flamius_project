import API from "../api/api";

const Signup = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await API.post("/auth/signup", { name, email, password });
    alert("Signup successful");
  };

  return (
    <form onSubmit={submitHandler}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
