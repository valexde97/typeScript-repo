import styles from "./lesson16.module.css";

import { redirect } from "react-router-dom";
import ChildrenProps from "../../components/ChildrenProps/ChildrenProps";
import MyInput from "../../components/MyInput/MyInput";
import { useFormik } from "formik";
import MyButton from "../../components/MyButton/MyButton";
import * as Yup from "yup";

interface IFormValues {
  password: string;
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("-Email is required- ")
    .email("-Incorrect email format- "),

  password: Yup.string()
    .required("-Password is required- ")
    .min(8, "-Must be more than 8 symbols- "),
});

export default function Lesson16(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "formik@gmail.com",
      password: "formik1234",
    } as { email: string; password: string },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson16: Practice before test</h2>
      <ChildrenProps func={() => console.log("Много разных пропсов ")}>
        <p style={{ color: "red" }}>Переданные данные</p>
        <ul>
          <li style={{ listStyle: "name" }}>Данные из Lesson 16</li>
          <li style={{ listStyle: "name" }}>Можно передать много данных</li>
        </ul>
      </ChildrenProps>
      <h2>2. Input components + formik</h2>
      <form style={{ width: "300px" }}  onSubmit={formik.handleSubmit}></form>

      {/* Импуты с урока */}
      {/* <MyInput name={'email'} placeholder='email' formik={formik}/>
     <MyInput name={'password'} placeholder='password' formik={formik}/>
   */}
      <div>
        <h2>Login Form</h2>
        <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
          {/* Мои импуты из сниппета */}
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            type="text"
            name="email"
          />
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
            type="password"
            name="password"
          />
          <MyButton type="submit" text="sign in" />
        </form>

        {formik.touched.password && formik.errors.password && (
          <span className={styles.errorMessage}>{formik.errors.password}</span>
        )}
        {formik.touched.email && formik.errors.email && (
          <span className={styles.errorMessage}>{formik.errors.email}</span>
        )}
      </div>
    </div>
  );
}
