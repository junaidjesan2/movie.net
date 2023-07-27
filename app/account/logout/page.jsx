"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [admin_email, setAdminEmail] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setAdminEmail(email);
  }, []);
  if (admin_email) {
    useEffect(() => {
      window.confirm("Do you really want to Log Out?");
      localStorage.removeItem("email");

      window.location.replace("/");
    }, []);
  }
}
