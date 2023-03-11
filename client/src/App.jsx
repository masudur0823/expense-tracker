import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Layout/Header";
import ViewExpense from "./pages/Expense/ViewExpense";
import Home from "./pages/Home";
import ViewIncome from "./pages/Income/ViewIncome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "income",
          element: <ViewIncome />,
        },
        {
          path: "expense",
          element: <ViewExpense />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
