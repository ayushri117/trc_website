import { useState } from "react";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
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
import ContactPage from "./pages/Contact/Contact";
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
import { action as ResourceAction } from "./pages/Admin/Resources/AddResource";
import { action as DeleteACtion } from "./pages/Admin/Team/TeamEdit";
import { action as DeleteResAction } from "./pages/Admin/Resources/ResourcesEdit";
import AddResource from "./pages/Admin/Resources/AddResource";
import { loader as resourceLoaderAuth } from "./pages/Admin/Resources/ResourcesEdit";
import FullBlog from "./pages/Admin/Blogs/FullBlog";
import Blogs from "./pages/Admin/Blogs/Blogs";
import AddBlog from "./pages/Admin/Blogs/AddBlog";
import { action as BlogAction } from "./pages/Admin/Blogs/AddBlog";
import { loader as blogLoaderAuth } from "./pages/Admin/Blogs/Blogs";
import { loader as blogLoader } from "./pages/Admin/Blogs/FullBlog";
import { action as DeleteBlogAction } from "./pages/Admin/Blogs/BlogsEdit";
import { loader as blogsLoader } from "./Components/Team/Team";
import { blogLoader as BlogsLoader } from "./pages/Admin/Blogs/Blogs";
import SingleBlog from "./Components/Blogs Card/Videos/SingleBlog";
import BlogOutlet from "./Components/Blogs Card/Videos/BlogOutlet";
import ResourceOutlet from "./Components/Links/ResourceOutlet";
import { SkeletonTheme } from "react-loading-skeleton";
import { loader as ResourceLoader } from "./Components/Links/Resources";
import EditBlog from "./pages/Admin/Blogs/EditBlog";
import { action as EditingBlogAction } from "./pages/Admin/Blogs/EditBlog";
import { IconContext } from "react-icons/lib/esm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Homepage />,
          loader: blogsLoader,
        },
        {
          path: "resources",
          element: <ResourceOutlet></ResourceOutlet>,
          children: [
            {
              index: true,
              element: <ResourcesPage></ResourcesPage>,
              loader: ResourceLoader,
            },
            {
              path: ":resourceid",
              element: <BlogOutlet></BlogOutlet>,
              children: [
                {
                  index: true,
                  element: <BlogVideo></BlogVideo>,
                  loader: BlogsLoader,
                },
                { path: ":blogid", element: <SingleBlog></SingleBlog> },
              ],
            },
          ],
        },
        { path: "about", element: <AboutPage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "team", element: <TeamPage /> },
        { path: "contact", element: <ContactPage /> },
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
        {
          path: "resources/newResource",
          element: <AddResource></AddResource>,
          action: ResourceAction,
          loader: checkAuthToken,
        },
        { path: "login", element: <Login></Login>, action: authAction },
        {
          path: "gallery",
          element: <GalleryEdit></GalleryEdit>,
          loader: checkAuthToken,
        },
        {
          path: "blogs",
          id: "blog-edit",
          element: <BlogsEdit></BlogsEdit>,
          loader: checkAuthToken,
          action: DeleteBlogAction,
          children: [
            {
              path: "view/:blogid",

              children: [
                {
                  index: true,
                  element: <FullBlog></FullBlog>,
                  loader: blogLoader,
                },
                {
                  path: "edit",
                  element: <EditBlog></EditBlog>,
                  loader: blogLoader,
                  action: EditingBlogAction,
                },
              ],
            },
            { index: true, element: <Blogs></Blogs>, loader: blogLoaderAuth },
            { path: "new", element: <AddBlog></AddBlog>, action: BlogAction },
          ],
        },
        {
          path: "resources",
          id: "resource-edit",
          element: <ResourcesEdit></ResourcesEdit>,
          loader: resourceLoaderAuth,
          action: DeleteResAction,
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
    <IconContext.Provider value={{ color: "white", className: "react-icons" }}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <AnimatePresence initial={true}>
          <div className="App">
            {isLoading && (
              <Loading
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              ></Loading>
            )}
            {!isLoading && (
              <>
                <RouterProvider router={router} />
              </>
            )}
          </div>
        </AnimatePresence>
      </SkeletonTheme>
    </IconContext.Provider>
  );
}

export default App;
