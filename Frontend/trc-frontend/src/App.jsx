import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Home";
import Root from "./pages/Root";
import ResourcesPage from "./pages/Resources";
import AboutPage from "./pages/About";
import Loading from "./Components/Loading";
import { AnimatePresence } from "framer-motion";
import BlogsPage from "./pages/Blogs";
import GalleryPage from "./pages/Gallery";
import TeamPage from "./pages/Team";
import ContactPage from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "resources", element: <ResourcesPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "blogs", element: <BlogsPage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "team", element: <TeamPage /> },
        { path: "contactUs", element: <ContactPage /> },
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="App">
        {isLoading && (
          <Loading isLoading={isLoading} setIsLoading={setIsLoading}></Loading>
        )}
        {!isLoading && (
          <>
            <RouterProvider router={router} />
          </>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;
