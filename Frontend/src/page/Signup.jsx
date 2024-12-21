import { useState } from "react";
import "../pageStyle/singup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
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
      console.log("Signup Data:", formData);

      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-heading">Signup</h2>
      <div className="signup-field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="signup-error">{errors.name}</span>}
      </div>
      <div className="signup-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="signup-error">{errors.email}</span>}
      </div>
      <div className="signup-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <span className="signup-error">{errors.password}</span>
        )}
      </div>
      <button type="submit" className="signup-button">
        Signup
      </button>
    </form>
  );
};

export default Signup;
