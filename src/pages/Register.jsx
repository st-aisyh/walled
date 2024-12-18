import logo from "../assets/logo.png";
import cover from "../assets/cover.png";
import { NavLink, Link } from "react-router";

import { Link } from "react-router";
import loginBg from "../assets/cover.png";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../components/ActionButton";

function Register() {
  const [loginForm, setLoginForm] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_number: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loginForm");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch data pengguna dari server
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(loginForm),
      });
      if(await response.json() == '"email" must be a valid email'){
        alert("Format email salah")
      } else{
        navigate("/")
      }
      
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Terjadi kesalahan saat mencoba login. Silakan coba lagi.");
    }
  };

  return (
    <section className="flex w-full h-screen bg-white">
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div>
          <img className="w-[290px] mx-auto" src={logo} alt="logo" />
          <form className="flex flex-col mt-24 gap-y-5">
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="user_name"
              type="text"
              placeholder="Nama Lengkap"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="user_email"
              type="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="user_password"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="bg-[#FAFBFD] pl-7 py-4 min-w-[400px] rounded-[10px] text-black"
              name="user_number"
              type="number"
              placeholder="No Hp"
              onChange={(e) => handleChange(e)}
            />
            <ActionButton
              disabled={
                !loginForm.user_email ||
                !loginForm.user_password ||
                !loginForm.user_number ||
                !loginForm.user_name
              }
              onClick={handleSubmit}
            >
              Register
            </ActionButton>
          </form>
          <div className="w-full mt-4 text-black">
            Sudah punya akun?{" "}
            <Link to="/" className="text-[#19918F] text-left">
              Login di sini
            </Link>
          </div>
        </div>
      </div>
      <img
        src={loginBg}
        alt="login background"
        className="w-1/2 object-cover"
      />
    </section>
  );
}

export default Register;