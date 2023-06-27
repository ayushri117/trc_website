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
import GalleryPage from "./pages/Gallery/Gallery";
import TeamPage from "./pages/Team";
import ContactPage from "./pages/Contact";
import BlogVideo from "./Components/Blogs Card/Videos/Blog";
import TutorialVideo from "./Components/Blogs Card/Videos/Tutorial";
import LectureVideo from "./Components/Blogs Card/Videos/Lecture";
import AdminRoot from "./pages/Admin/AdminRoot/ADminRoot";
import AdminHome from "./pages/Admin/Home/AdminHome";
import Login from "./pages/Admin/Login/Login";
import TeamEdit from "./pages/Admin/Team/TeamEdit";
import GalleryEdit from "./pages/Admin/Gallery/GalleryEdit";
import BlogsEdit from "./pages/Admin/Blogs/BlogsEdit";
import ResourcesEdit from "./pages/Admin/Resources/ResourcesEdit";

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
        { path: "blog", element: <BlogVideo /> },
        { path: "tutorial", element: <TutorialVideo /> },
        { path: "lecture", element: <LectureVideo /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminRoot></AdminRoot>,
      children: [
        { index: true, element: <AdminHome></AdminHome> },
        { path: "login", element: <Login></Login> },
        { path: "team", element: <TeamEdit></TeamEdit> },
        { path: "gallery", element: <GalleryEdit></GalleryEdit> },
        { path: "blogs", element: <BlogsEdit></BlogsEdit> },
        { path: "resources", element: <ResourcesEdit></ResourcesEdit> },
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

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
