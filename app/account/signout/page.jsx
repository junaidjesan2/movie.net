"use client"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "../../../components/Redux/UserSlice";

export default function page() {
  const dispatch = useDispatch();
  const router = useRouter();
  dispatch(
    logout({
      user: "",
    })
  );
  alert("Do you really want to log out");
  router.push("/account/signin");
}
