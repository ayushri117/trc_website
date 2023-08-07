import { redirect } from "react-router-dom";
import axios from "axios";

export async function action() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get("https://trc-iitpkd-backend.onrender.com/logout", {
    headers: headers,
  });

  console.log(response);

  if (!response.data.ok) {
    return json(
      { error: true, message: "Could Not logout User" },
      { status: 500 }
    );
  }
  localStorage.removeItem("token");
  return redirect("/admin/login");
}
