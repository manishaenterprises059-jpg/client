import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const CONTACT_EMAIL = 'manishaenterprises059@gmail.com';

const POLICIES = {
    about: {
        title: 'About Manisha Enterprise',
        content: `Manisha Enterprise is a trusted supplier of garments and fashion products based in Noida, Uttar Pradesh. We deal in quality clothing for men, women, boys, and girls, sourced directly from reliable manufacturers.

This is placeholder/dummy text. Replace it with your actual company story, mission, and values.`,
    },
    gst: {
        title: 'GST Details',
        content: `GST Registration Number: 09DAJPM4155C1ZP

Registered Address: B-21, BR Complex, Second Floor, Sharma Market, Harola, Sector-5, Noida - 201301.

This is placeholder/dummy text. Replace it with your actual GST compliance details if needed.`,
    },
    privacy: {
        title: 'Privacy Policy',
        content: `This is a dummy Privacy Policy for demonstration purposes.

We collect personal information such as your name, email, phone number, and shipping address when you place an order on our website. This information is used solely to process and deliver your orders, and is never sold to third parties.

We use cookies to improve your browsing experience. By using this site, you consent to our use of cookies.

For any privacy-related concerns, contact us at ${CONTACT_EMAIL}.

Replace this text with your actual privacy policy before going live.`,
    },
    terms: {
        title: 'Terms & Conditions',
        content: `This is a dummy Terms & Conditions section for demonstration purposes.

By accessing and using this website, you agree to be bound by these terms. All products listed are subject to availability. Prices are subject to change without prior notice.

Manisha Enterprise reserves the right to refuse service to anyone for any reason at any time.

For questions, reach out to us at ${CONTACT_EMAIL}.

Replace this text with your actual terms and conditions before going live.`,
    },
    shipping: {
        title: 'Shipping Policy',
        content: `This is a dummy Shipping Policy for demonstration purposes.

Orders are typically processed within 1-2 business days. Delivery timelines vary depending on your location and generally range from 3-7 business days.

Shipping charges, if applicable, will be calculated at checkout.

For shipping queries, contact us at ${CONTACT_EMAIL}.

Replace this text with your actual shipping policy before going live.`,
    },
    return: {
        title: 'Return & Refund Policy',
        content: `This is a dummy Return & Refund Policy for demonstration purposes.

Items can be returned within 7 days of delivery, provided they are unused and in original packaging. Refunds will be processed within 5-7 business days after we receive the returned item.

Certain items may not be eligible for return. Please check the product page for details.

For return requests, email us at ${CONTACT_EMAIL}.

Replace this text with your actual return and refund policy before going live.`,
    },
    contact: {
        title: 'Contact Us',
        content: `We'd love to hear from you!

Email: ${CONTACT_EMAIL}
Mobile: +91 7011894940
Address: B-21, BR Complex, Second Floor, Sharma Market, Harola, Sector-5, Noida - 201301.

This is placeholder/dummy text. Replace it with your actual contact details or a contact form.`,
    },
    track: {
        title: 'Track Your Order',
        content: `This is a dummy Track Your Order section for demonstration purposes.

To track your order, log in to your account and visit the "My Orders" section, or use the tracking ID sent to your email after dispatch.

For help, contact us at ${CONTACT_EMAIL}.

Replace this with your actual order tracking integration.`,
    },
    help: {
        title: 'Help Center',
        content: `This is a dummy Help Center for demonstration purposes.

Find answers to frequently asked questions about orders, payments, shipping, and returns here.

For further assistance, email us at ${CONTACT_EMAIL}.

Replace this with your actual FAQ/help content.`,
    },
};

function PolicyModal({ policyKey, onClose }) {
    if (!policyKey) return null;
    const policy = POLICIES[policyKey];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={onClose}
        >
            <div
                className="bg-[var(--panel-bg)] text-[var(--muted-text)] max-w-lg w-full max-h-[80vh] overflow-y-auto rounded-xl p-6 relative border border-[var(--border)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl leading-none"
                    aria-label="Close"
                >
                    ✕
                </button>
                <h2 className="text-white text-xl font-semibold mb-4">
                    {policy.title}
                </h2>
                <p className="whitespace-pre-line text-sm leading-relaxed">
                    {policy.content}
                </p>
            </div>
        </div>
    );
}

function Footer() {
    const [activePolicy, setActivePolicy] = useState(null);

    const openPolicy = (key) => (e) => {
        e.preventDefault();
        setActivePolicy(key);
    };

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
                            <strong>Email:</strong>{' '}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="hover:text-white transition"
                            >
                                {CONTACT_EMAIL}
                            </a>
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
                            <li><a href="#" onClick={openPolicy('contact')} className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" onClick={openPolicy('track')} className="hover:text-white transition">Track Your Order</a></li>
                            <li><a href="#" onClick={openPolicy('shipping')} className="hover:text-white transition">Shipping Policy</a></li>
                            <li><a href="#" onClick={openPolicy('return')} className="hover:text-white transition">Return & Refund Policy</a></li>
                            <li><a href="#" onClick={openPolicy('help')} className="hover:text-white transition">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-5">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" onClick={openPolicy('about')} className="hover:text-white transition">About Manisha Enterprise</a></li>
                            <li><a href="#" onClick={openPolicy('gst')} className="hover:text-white transition">GST Details</a></li>
                            <li><a href="#" onClick={openPolicy('privacy')} className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" onClick={openPolicy('terms')} className="hover:text-white transition">Terms & Conditions</a></li>
                            <li><a href="#" onClick={openPolicy('contact')} className="hover:text-white transition">Contact Us</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

                    <div className="text-gray-400">
                        © {new Date().getFullYear()} MANISHA ENTERPRISE. All Rights Reserved.
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
                        <a href="#" onClick={openPolicy('privacy')} className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" onClick={openPolicy('terms')} className="hover:text-white transition">Terms & Conditions</a>
                        <a href="#" onClick={openPolicy('shipping')} className="hover:text-white transition">Shipping Policy</a>
                        <a href="#" onClick={openPolicy('return')} className="hover:text-white transition">Return Policy</a>
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

            <PolicyModal policyKey={activePolicy} onClose={() => setActivePolicy(null)} />
        </footer>
    );
}

export default Footer;
