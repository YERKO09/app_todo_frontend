import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

const RegisterPage = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerWithEmailAndPassword(username, email, password);
    console.log(response)
    alert(response?.message || "Something went wrong");
  };

  return (
    <div className="container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Ingresa un nombre de usuario"
            />
          </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Ingresa tu Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Ingresa una contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
