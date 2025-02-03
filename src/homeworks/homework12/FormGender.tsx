import { useState } from "react";
import MyButton from "../../components/MyButton/MyButton";
import styles from "./formGender.modeule.css";
import { useFormik } from "formik";

interface IFormValues {
  name: string;
}
interface IFormData{
  gender: string;
  isMale: boolean;
}

export default function Lesson12(): JSX.Element {
  const [gender, setGender] = useState<string>("");

  const fetchGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    setGender(data.gender);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormValues,
    onSubmit: (values: IFormValues) => {
      fetchGender(values.name)

    },
  });

  return (
    <>
      <h2>Lesson 12. Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="Enter your name: "
          name="name"
        />
        <MyButton type="submit" text="send data" />
      </form>
     <h2>{gender==="male" ? "🧔🏻‍♂️": "👱🏻‍♀️"}</h2>
    </>
  );
}
