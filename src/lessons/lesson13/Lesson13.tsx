import MyButton from '../../components/MyButton/MyButton';
import styles from './lesson13.module.css';
import * as Yup from "yup"
import { useFormik } from "formik";


interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

//.number() - метод проверки на число
//.typeError("текст сообщения") - сообщение в случае некорректного ввода

const schema = Yup.object().shape({
  model: Yup
    .number()
    .typeError('Model is a number')
    .required('Model is required')
    .integer('Model is integer')
    .min(100, 'Model number must be more than 100')
    .max(2000, 'Model number must be less than 2000...'),
  creator: Yup
    .string()
    .required('Company name is required'),
  email: Yup
    .string()
    .required('Email is required')
    .email('Incorrect email format')
    .max(50, 'Less than 50 symbols, please')
});


export default function Lesson13(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: "",
    } as IFormValues,

    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div>
      <h2>Lesson 13</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.model} onChange={formik.handleChange} placeholder="Robot #0000..." type="text" name="model" />
        <input value={formik.values.creator} onChange={formik.handleChange} placeholder="Creator name" type="text" name="creator" />
        <input value={formik.values.email} onChange={formik.handleChange} placeholder="companyEmail@email.com" type="text" name="email" />
        <MyButton type="submit" text="send" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.model} </span>
      <span className={styles.errorMessage}>{formik.errors.creator} </span>
      <span className={styles.errorMessage}>{formik.errors.email} </span>
    </div>
  );
}
