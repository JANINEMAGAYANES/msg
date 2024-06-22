import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import App , { loader as rootLoader } from './App.js';
import ErrorPage from "./pages/error-page";
import Chat from "./pages/Chat";
import MedicineInfo from "./components/MedicineInfo";
import Calendar from "./pages/Calendar";
//
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         errorElement: <ErrorPage/>,
//         loader: rootLoader(),
//         children: [
//             {
//                 path: "/",
//                 element: <Calendar />,
//                 errorElement: <ErrorPage/>
//             },
//             {
//                 path: "/contact",
//                 element: <Chat />,
//                 errorElement: <ErrorPage />
//             },
//
//         ]
//     },
//
//
// ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<RouterProvider router={router} />*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
