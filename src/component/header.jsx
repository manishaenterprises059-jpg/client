import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCartPlus,
  FaHistory,
  FaSignOutAlt,
  FaBars,
  FaCamera,
  FaTimes,
  FaSearch,
} from 'react-icons/fa';

import { logout } from '../features/auth_slice';
import { resetCart } from '../features/cart';
import { searcContext } from '../context/searchcontext';
import SearchByAi from './searchByAi';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return stored === 'dark' ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      if (next === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return next;
    });
  };

  const { search, setSearch, resetToNormalMode, enterResultsView } = useContext(searcContext);

  const isAuth = useSelector((state) => state.user.isAuth);
  const role = useSelector((state) => state.user.role);
  const cartCount = useSelector((state) => state.cart.cartCount);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAiSearch, setShowAiSearch] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
    resetToNormalMode();
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSearchFocus = () => {
    enterResultsView();
    closeMobileMenu();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const openAiSearch = () => {
    resetToNormalMode();
    setShowAiSearch(true);
    closeMobileMenu();
  };

  const openSearch = () => {
    enterResultsView();
    closeMobileMenu();
  };

  const canShowSearch = user?.role !== 'seller' && user?.role !== 'admin';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--panel-bg)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink
              to="/"
              onClick={() => {
                resetToNormalMode();
                closeMobileMenu();
              }}
              className="text-3xl font-extrabold tracking-tight "
            >
              fly<span className="text-amber-500">Fashion</span>
               <span className="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-400 font-medium">
        ⚡  handled by Manisha Enterprise
    </span>
            </NavLink>
            {/* Desktop Search + AI */}
            {canShowSearch && (
              <>
                <div className="hidden md:block flex-1 max-w-xl mx-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={search}
                      onFocus={handleSearchFocus}
                      onChange={handleSearchChange}
                      className="w-full px-5 py-2.5 pl-12 bg-[var(--panel-bg-2)] border border-[var(--border)] rounded-full text-[var(--primary)] placeholder-[var(--muted-text)]/70 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]/60"
                    />
                    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--primary)]/40" size={20} />
                  </div>
                </div>

                <button
                  onClick={openAiSearch}
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[var(--panel-bg-2)] hover:bg-[var(--panel-bg)] text-[var(--primary)] rounded-full border border-[var(--border)]"
                >
                  <FaCamera size={18} />
                  <span className="hidden sm:inline">AI Search by Image</span>
                </button>
              </>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {isAuth && role === 'user' && (
                <>
                  <NavLink to="/cart" onClick={resetToNormalMode} className="relative text-[var(--primary)]/70 hover:text-[var(--primary)]">
                    <FaCartPlus size={24} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[var(--danger)] text-[var(--secondary)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </NavLink>

                  <NavLink to="/order" onClick={resetToNormalMode} className="text-[var(--primary)]/70 hover:text-[var(--primary)]">
                    <FaHistory size={24} />
                  </NavLink>
                </>
              )}

              {isAuth ? (
                <button onClick={handleLogout} className="flex items-center gap-2 text-[var(--primary)]/70 hover:text-[var(--danger)]">
                  <FaSignOutAlt size={22} /> Logout
                </button>
              ) : (
                <div className="flex items-center gap-6">
                  <NavLink to="/login" className="text-[var(--primary)]/70 hover:text-[var(--primary)]">
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-6 py-2 bg-[var(--accent)] hover:brightness-[0.98] text-[#111827] rounded-full font-medium"
                  >
                    Register
                  </NavLink>
                </div>
              )}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="hidden lg:flex items-center justify-center p-2 rounded-full border border-[var(--border)] hover:bg-[var(--panel-bg)] text-[var(--primary)]/70 hover:text-[var(--primary)]"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </nav>

            {/* Theme toggle (mobile) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-3 text-[var(--primary)]/70 hover:text-[var(--primary)] rounded-lg md:hidden border border-[var(--border)] hover:bg-[var(--panel-bg)]"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              {canShowSearch && (
                <>
                  <button onClick={openSearch} className="p-3 text-[var(--primary)]/70 hover:text-[var(--primary)] rounded-lg border border-[var(--border)] hover:bg-[var(--panel-bg)]">
                    <FaSearch size={24} />
                  </button>
                  <button onClick={openAiSearch} className="p-3 text-[var(--primary)]/70 hover:text-[var(--primary)] rounded-lg border border-[var(--border)] hover:bg-[var(--panel-bg)]">
                    <FaCamera size={24} />
                  </button>
                </>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 text-[var(--primary)]/70 hover:text-[var(--primary)] rounded-lg border border-[var(--border)] hover:bg-[var(--panel-bg)]"
              >
                {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--app-bg)]/90 border-t border-[var(--border)]"
            >
              <div className="px-4 py-6 flex flex-col gap-6 text-lg">
                {isAuth && role === 'user' && (
                  <>
                    <NavLink to="/cart" onClick={closeMobileMenu} className="flex items-center gap-3 text-[var(--primary)]/70 hover:text-[var(--primary)] py-3">
                      <FaCartPlus size={24} /> Cart {cartCount > 0 && `(${cartCount})`}
                    </NavLink>
                    <NavLink to="/order" onClick={closeMobileMenu} className="flex items-center gap-3 text-[var(--primary)]/70 hover:text-[var(--primary)] py-3">
                      <FaHistory size={24} /> Order History
                    </NavLink>
                  </>
                )}

                {isAuth ? (
                  <button onClick={handleLogout} className="flex items-center gap-3 text-[var(--danger)] hover:opacity-90 py-3 text-left">
                    <FaSignOutAlt size={24} /> Logout
                  </button>
                ) : (
                  <div className="flex flex-col gap-4 pt-4 border-t border-[var(--border)]">
                    <NavLink to="/login" onClick={closeMobileMenu} className="text-[var(--primary)]/70 hover:text-[var(--primary)] py-3">
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={closeMobileMenu}
                      className="px-6 py-3 bg-[var(--accent)] hover:brightness-[0.98] text-[#111827] rounded-xl text-center font-medium"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* AI Search Modal */}
      <AnimatePresence>
        {showAiSearch && (
          <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[var(--panel-bg-2)] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-[var(--border)]"
            >
              <div className="px-6 py-4 border-b flex justify-between items-center border-[var(--border)]">
                <h2 className="text-xl font-semibold text-[var(--secondary)]">AI Image Search</h2>
                <button onClick={() => setShowAiSearch(false)} className="text-3xl text-[var(--secondary)]/60 hover:text-[var(--secondary)]">
                  ✕
                </button>
              </div>
              <div className="p-6">
                <SearchByAi onClose={() => setShowAiSearch(false)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

