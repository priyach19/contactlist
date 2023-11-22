import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./Pages/Error";
import Addcontact from "./Pages/Addcontact/Addcontact";
import Editcontact from "./Pages/Editcontact/Editcontact";
// Importing custom context
import CustomContext from "./context";
// Importing toastify for the notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "add", element: <Addcontact /> },
        { path: "edit/:id", element: <Editcontact /> },
      ],
    },
  ]);
  return (
    <CustomContext>
      <ToastContainer />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CustomContext>
  );
}

export default App;
