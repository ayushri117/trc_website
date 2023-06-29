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
import Login, { action as authAction } from "./pages/Admin/Login/Login";
import TeamEdit from "./pages/Admin/Team/TeamEdit";
import GalleryEdit from "./pages/Admin/Gallery/GalleryEdit";
import BlogsEdit from "./pages/Admin/Blogs/BlogsEdit";
import ResourcesEdit from "./pages/Admin/Resources/ResourcesEdit";
import { action as logoutAction } from "./pages/Admin/Logout/Logout";
import { tokenLoader } from "../util/auth";
import { checkAuthToken } from "../util/auth";
import { loader as teamLoaderAuth } from "./pages/Admin/Team/TeamEdit";
import FacultyEdit from "./pages/Admin/Faculty/FacultyEdit";
import AddMember from "./pages/Admin/Team/AddMember";
import { action as MemberAction } from "./pages/Admin/Team/AddMember";
import { action as DeleteACtion } from "./pages/Admin/Team/TeamEdit";

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
      // errorElement: <h1 style={{ color: "white" }}>Somthing Went Wrong</h1>,
      id: "admin-root",
      loader: tokenLoader,
      children: [
        {
          index: true,
          id: "team-edit",
          element: <TeamEdit></TeamEdit>,
          loader: teamLoaderAuth,
          action: DeleteACtion,
        },
        {
          path: "newMember",
          element: <AddMember></AddMember>,
          action: MemberAction,
          loader: checkAuthToken,
        },
        { path: "login", element: <Login></Login>, action: authAction },
        {
          path: "faculty",
          element: <FacultyEdit></FacultyEdit>,
          loader: checkAuthToken,
        },
        {
          path: "gallery",
          element: <GalleryEdit></GalleryEdit>,
          loader: checkAuthToken,
        },
        {
          path: "blogs",
          element: <BlogsEdit></BlogsEdit>,
          loader: checkAuthToken,
        },
        {
          path: "resources",
          element: <ResourcesEdit></ResourcesEdit>,
          loader: checkAuthToken,
        },
        {
          path: "logout",
          action: logoutAction,
        },
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
