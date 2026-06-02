import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { getLogin } from '../services/user';
import { loginSuccess } from '../features/auth_slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = () => {

  const [input, setInput] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.user.isAuth)
  const role = useSelector((state) => state.user.role)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!input.email) {
      toast.error("Please Enter Email");
      return;
    }

    if (!input.password) {
      toast.error("Please Enter Password");
      return;
    }

    try {
      const res = await getLogin(input);

      dispatch(loginSuccess(res.data));

      toast.success("Login success");

      if (res.data.role === "user") {
        navigate("/cart");
      } else {
        navigate("/admin_dashboard"); 
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    console.log("login component re-render")
  })

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--app-bg)]">
      <div className="w-full max-w-sm">

        <h2 className="text-center text-2xl font-bold tracking-tight text-[var(--text)]">
          Sign in to your account
        </h2>

        <div className="mt-8 bg-white/70 dark:bg-white/[0.04] backdrop-blur shadow-xl rounded-2xl p-6 border border-[var(--border)]">

          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[var(--muted-text)]">
                Email address
              </label>
              <input

                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                type="email"
                required
                placeholder="Enter your email"
                className="mt-2 block w-full rounded-lg border border-[var(--border)]/70 bg-white/50 dark:bg-white/[0.04] px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] focus:border-[var(--accent)]"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-[var(--muted-text)]">
                  Password
                </label>
                <span onClick={() => navigate('/forgot-password')} className="text-sm font-medium text-[var(--accent)]/90 hover:text-[var(--accent)] cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <input
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
                type="password"
                required
                placeholder="Enter password"
                className="mt-2 block w-full rounded-lg border border-[var(--border)]/70 bg-white/50 dark:bg-white/[0.04] px-3 py-2 text-sm
            focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] focus:border-[var(--accent)]"
              />
            </div>

            {/* Button */}
            <button
              onClick={handleLogin}
              type="button"
                className="w-full rounded-xl bg-[var(--accent)] py-2.5 text-sm font-semibold text-[#111827]
          hover:brightness-[1.05] transition focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-[var(--muted-text)]">
            Not a member?
            <span
              onClick={() => navigate("/register")}
              className="font-semibold text-[var(--accent)]/90 hover:underline cursor-pointer"
            >
              {' '}Register
            </span>
          </p>
        </div>
      </div>
    </div>

  );
}

export default Login;





