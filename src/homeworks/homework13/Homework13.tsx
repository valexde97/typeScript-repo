import styles from "../../lessons/lesson13/lesson13.module.css";
import MyButton from "../../components/MyButton/MyButton";
import * as Yup from "yup";
import { useFormik } from "formik";

interface IFormValues {
  login: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const schema = Yup.object().shape({
  login: Yup.string()
    .required("Login is required")
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed")
    .min(3, "Must be more than 3 symbols")
    .max(20, "Must be less than 20 symbols"),

  email: Yup.string()
    .required("Email is required")
    .email("Incorrect email format"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be more than 8 symbols")
    .max(32, "Must be less than 32 symbols")
    .matches(/[A-Z]/, "At least one uppercase letter (A-Z)")
    .matches(/[a-z]/, "At least one lowercase letter (a-z)")
    .matches(/\d/, "At least one number (0-9)")
    .matches(/[@$!%*?&]/, "At least one special character (@$!%*?&)"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password must be confirmed")
});

export default function Homework13(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      email: "",
      confirmPassword: "",
    } as IFormValues,

    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.login} onChange={formik.handleChange} placeholder="Login" type="text" name="login" />
        <input value={formik.values.password} onChange={formik.handleChange} placeholder="Password" type="password" name="password" />
        <input value={formik.values.email} onChange={formik.handleChange} placeholder="Email" type="text" name="email" />
        <input value={formik.values.confirmPassword} onChange={formik.handleChange} placeholder="Confirm Password" type="password" name="confirmPassword" />
        <MyButton type="submit" text="send" />
      </form>

      {formik.touched.login && formik.errors.login && <span className={styles.errorMessage}>{formik.errors.login}</span>}
      {formik.touched.password && formik.errors.password && <span className={styles.errorMessage}>{formik.errors.password}</span>}
      {formik.touched.email && formik.errors.email && <span className={styles.errorMessage}>{formik.errors.email}</span>}
      {formik.touched.confirmPassword && formik.errors.confirmPassword && <span className={styles.errorMessage}>{formik.errors.confirmPassword}</span>}
    </div>
  );
}