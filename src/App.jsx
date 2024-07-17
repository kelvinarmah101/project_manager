
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom"

import * as Pages   from "./pages";
import * as Layouts from "./layouts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">

        <Route element={<Layouts.Dashboard />}>
          <Route path="dashboard"             element={<Pages.Dashboard />} />
          <Route path="dashboard/profile"     element={<Pages.Profile   />} />
          <Route path="dashboard/upload"      element={<Pages.Upload    />} />
          <Route path="dashboard/help"        element={<Pages.Help      />} />
          <Route path="dashboard/news"        element={<Pages.News      />} />
          <Route path="dashboard/capstone"    element={<Pages.Capstone      />} />
        </Route>

        <Route path="dashboard/search"      element={<Pages.Search    />} />
        <Route index element={<Pages.Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
