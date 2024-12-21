import { useState } from "react";
import "../pageStyle/entery.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data:", formData);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-heading">Login</h2>
      <div className="login-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="login-error">{errors.email}</span>}
      </div>
      <div className="login-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="login-error">{errors.password}</span>}
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
