import { useState } from "react";
import { useEffect } from "react";

export default function AuthenticationHOC({ children }) {
  const [admin_email, setAdminEmail] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setAdminEmail(email);
  }, []);

  if (!admin_email) {
    return window.location.replace("/account/signin");
  } else {
    return children;
  }
}
