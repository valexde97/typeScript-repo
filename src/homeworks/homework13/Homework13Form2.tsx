import styles from "../../lessons/lesson13/lesson13.module.css";
import MyButton from "../../components/MyButton/MyButton";
import * as Yup from "yup";
import { useFormik } from "formik";

interface IFormValues {
  password: string;
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Incorrect email format"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Must be more than 8 symbols"),
});

export default function Homework13Form2(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
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
      <h2>Login Form📚</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.email} onChange={formik.handleChange} placeholder="Email" type="text" name="email" />
        <input value={formik.values.password} onChange={formik.handleChange} placeholder="Password" type="password" name="password" />
        <MyButton type="submit" text="send" />
      </form>

      {formik.touched.password && formik.errors.password && <span className={styles.errorMessage}>{formik.errors.password}</span>}
      {formik.touched.email && formik.errors.email && <span className={styles.errorMessage}>{formik.errors.email}</span>}
    </div>
  );
}
