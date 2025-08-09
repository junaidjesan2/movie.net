"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function AuthenticationHOC({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data") || "null");
    if (userData && userData[0].email) {
      setAuthenticated(true);
    } else {
      router.push("/account/signin");
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? children : null;
}
