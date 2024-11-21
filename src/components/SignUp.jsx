import React from "react";
import useForm from "./UseForm";

const SignupForm = () => {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationRules: {
      username: {
        required: true,
        minLength: 3,
        maxLength: 20,
        pattern: /^[a-zA-Z0-9_]+$/,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minLength: 8,
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      },
      confirmPassword: {
        required: true,
        match: "password",
      },
    },
    onSubmit: async (data) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.username && errors.username ? "error" : ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.email && errors.email ? "error" : ""}
          />
          {touched.email && errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.password && errors.password ? "error" : ""}
          />
          {touched.password && errors.password && (
            <span className="error-message">{errors.password} </span>
          )}
        </div>

        <div className="form-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
    />
    {touched.confirmPassword && errors.confirmPassword && (
      <span className="error-message">{errors.confirmPassword} </span>
    )}
  </div>

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </div>

        {errors.submit && <div className="submit-error">{errors.submit}</div>}
      </form>
    </>
  );
};

export default SignupForm;
