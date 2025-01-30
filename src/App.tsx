import { HashRouter, Routes, Route } from "react-router-dom";
import Homework08 from "./homeworks/homework08/Homework08";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/homePage/HomePage";
import FetchFox from "./components/fetchFox/Fetchfox";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Homework05 from "./homeworks/homework05/Homework05";
import styles from "./App.module.css"


function App() {
  return (
    <HashRouter>
      
      {/* импортируем компонент Routes (пути) вокруг всех компонентов приложения */}
      <Routes>
        {/* В обертке Route (один путь) - передаем пропсами: element - компонент назначаемый на путь, path - путь до компонента */}
        <Route path="/" element={<Layout />}>
          {/* компоненты ниже придут в Layout на место Outlet */}
          {/* path - это путь до компонента */}
          {/* это же значение 'path' мы используем в навигационных элементах Link в пропсе 'to', чтобы они работали, как ссылка на компонент */}
          <Route path="/" element={<HomePage />} />
  <Route path="fetch-fox" element={<FetchFox/>}/>
  <Route path="lesson01" element={<Lesson01/>}/>
  <Route path="lesson02" element={<Lesson02/>}/>
  <Route path="lesson03" element={<Lesson03/>}/>
  <Route path="lesson04" element={<Lesson04/>}/>
  <Route path="lesson05" element={<Homework05/>}/>
  <Route path="lesson06" element={<FetchFox/>}/>
  <Route path="lesson07" element={<ErrorPage/>}/>
  <Route path="lesson08" element={<Lesson08/>}/>
  <Route path="lesson09" element={<Lesson09/>}/>
  <Route path="lesson10" element={<Lesson10/>}/>
  <Route path="lesson11" element={<Lesson10/>}/>
 
  <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
