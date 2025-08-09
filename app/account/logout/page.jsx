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
      const confirmLogout = window.confirm("Do you really want to Log Out?");
      if (confirmLogout) {
        localStorage.removeItem("userData");
        window.location.reload();
        window.location.replace("/");
      }
    }, []);
  }
}
