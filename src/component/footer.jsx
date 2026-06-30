import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer className="bg-[var(--panel-bg)] text-[var(--muted-text)] border-t border-[var(--border)]">

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src={logo}
                                alt="Manisha Enterprise Logo"
                                className="h-10 w-auto"
                            />
                            <h2
                                className="text-3xl font-bold tracking-tight"
                                style={{ color: 'var(--accent)' }}
                            >
                                MANISHA ENTERPRISE
                            </h2>
                        </div>

                        <p className="text-muted leading-relaxed max-w-md">
                            Manisha Enterprise is a trusted supplier of garments
                            and fashion products.
                            <br /><br />
                            <strong>GST No.:</strong> 09DAJPM4155C1ZP
                            <br />
                            <strong>Mobile:</strong> +91 7011894940
                            <br />
                            <strong>Address:</strong> B-21, BR Complex, Second
                            Floor, Sharma Market, Harola, Sector-5, Noida -
                            201301.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition rounded-full flex items-center justify-center text-xl">
                                📘
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition rounded-full flex items-center justify-center text-xl">
                                📸
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition rounded-full flex items-center justify-center text-xl">
                                𝕏
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 transition rounded-full flex items-center justify-center text-xl">
                                ▶️
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Shop
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/products" className="hover:text-white transition">All Products</Link></li>
                            <li><Link to="/category/men" className="hover:text-white transition">Men</Link></li>
                            <li><Link to="/category/women" className="hover:text-white transition">Women</Link></li>
                            <li><Link to="/category/boys" className="hover:text-white transition">Boys</Link></li>
                            <li><Link to="/category/girls" className="hover:text-white transition">Girls</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Support
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Track Your Order</a></li>
                            <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Return & Refund Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Manisha Enterprise</a></li>
                            <li><a href="#" className="hover:text-white transition">GST Details</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

                    <div className="text-gray-400">
                        © {new Date().getFullYear()} MANISHA ENTERPRISE. All Rights Reserved.
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition">Shipping Policy</a>
                        <a href="#" className="hover:text-white transition">Return Policy</a>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex gap-4 text-2xl opacity-75">
                        <span>💳</span>
                        <span>🪙</span>
                        <span>📱</span>
                        <span>🏦</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
