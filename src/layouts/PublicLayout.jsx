import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function PublicLayout() {
  const credential = localStorage.getItem("loginForm");

  const navigate = useNavigate();

  useEffect(() => {
    if (credential) return navigate("/dashboard");
  }, []);

  return <Outlet />;
}

export default PublicLayout;