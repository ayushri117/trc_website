import React from "react";
import {
  defer,
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const data = useLoaderData();

  return (
    <div className="Gallery_Container_Admin">
      <div className="Gallery_Box_Admin">
        {data.galleryData.map((img) => (
          <GalleryCard data={img}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

export async function authCheck() {
  const token = getAuthToken();

  return token !== null;
}

export async function galleryLoader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get(
    "https://trc-iitpkd-backend.onrender.com/gallery",
    {
      headers: headers,
    }
  );

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.gallery;

  return resData;
}

export async function loader({ request, params }) {
  return defer({
    auth: await authCheck(),
    galleryData: await galleryLoader(),
  });
}
