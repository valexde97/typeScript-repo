import { useState } from "react";
import MyButton from "../../components/MyButton/MyButton";
import styles from "./formGender.module.css";
import { useFormik } from "formik";

interface IFormValues {
  name: string;
}

interface IFormData {
  count: number;
  probability: number;
  gender: string;
  name: string;
}

export default function Lesson12(): JSX.Element {
  const [genderData, setGenderData] = useState<IFormData | null>(null);

  const fetchGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data: IFormData = await response.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormValues,
    onSubmit: (values: IFormValues) => {
      fetchGender(values.name);
    },
  });

  return (
    <>
      <h2>Gender Form♂️🧔🏻‍♀️♀️</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="Enter your name: "
          name="name"
        />
        <MyButton type="submit" text="send data" />
      </form>
      {genderData && (
        <p>
          {genderData.name} is on {" "}
          {Math.round(genderData.probability * 100)}%
          {genderData.gender === "male" ? "🧔🏻‍♂️" : "👩🏼‍🦰"}{" "}
        </p>
      )}
    </>
  );
}