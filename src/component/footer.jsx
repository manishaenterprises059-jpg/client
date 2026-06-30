import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const CONTACT_EMAIL = 'manishaenterprises059@gmail.com';
const CONTACT_PHONE = '+91 7011894940';
const BUSINESS_ADDRESS =
    'B-21, BR Complex, Second Floor, Sharma Market, Harola, Sector-5, Noida - 201301, Uttar Pradesh, India';
const GST_NUMBER = '09DAJPM4155C1ZP';
const LAST_UPDATED = 'July 1, 2026';

const POLICIES = {
    about: {
        title: 'About Manisha Enterprise',
        content: `Manisha Enterprise is a Noida-based supplier and retailer of garments and fashion products for men, women, boys, and girls. We work directly with trusted manufacturers to bring quality, affordable clothing to our customers.

Our Mission
To make well-made, fairly priced fashion accessible to every household, backed by reliable service and honest business practices.

What We Stand For
- Quality: Every product is checked before it is listed for sale.
- Transparency: Clear pricing, clear policies, no hidden surprises.
- Customer First: Your satisfaction guides how we operate, from sourcing to delivery.

Registered Office: ${BUSINESS_ADDRESS}
GST No.: ${GST_NUMBER}

For business inquiries, partnerships, or bulk orders, write to us at ${CONTACT_EMAIL}.`,
    },

    gst: {
        title: 'GST Details',
        content: `Manisha Enterprise is a GST-registered business operating in compliance with Indian tax law.

GST Registration Number: ${GST_NUMBER}

Registered Address:
${BUSINESS_ADDRESS}

All invoices issued by Manisha Enterprise include applicable GST as per current government rates for the product category. A GST-compliant tax invoice is provided with every order and can also be sent to your email on request.

For GST invoice copies or tax-related queries, contact us at ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
    },

    privacy: {
        title: 'Privacy Policy',
        content: `Last updated: ${LAST_UPDATED}

Manisha Enterprise ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what we collect, how we use it, and the choices you have.

1. Information We Collect
- Personal details you provide: name, email address, phone number, billing and shipping address.
- Order information: products purchased, order history, payment status (we do not store full card or payment credentials; these are handled by our secure payment gateway partners).
- Technical information: IP address, browser type, device information, and cookies, collected automatically when you visit our website.

2. How We Use Your Information
- To process, confirm, and deliver your orders.
- To communicate with you about your order status, offers, or customer support requests.
- To improve our website, products, and overall shopping experience.
- To comply with legal and tax obligations, including GST invoicing.

3. Cookies
We use cookies and similar technologies to remember your preferences, keep your cart active, and understand how visitors use our site. You can disable cookies in your browser settings, though some site features may not work as intended.

4. Sharing of Information
We do not sell, rent, or trade your personal information to third parties. We may share necessary order details with trusted logistics and payment partners solely to fulfil your order, and with authorities where required by law.

5. Data Security
We take reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.

6. Your Rights
You may request access to, correction of, or deletion of your personal data by contacting us. We will respond to verified requests within a reasonable timeframe.

7. Children's Privacy
Our website is not intended for children under 18. We do not knowingly collect personal information from minors.

8. Changes to This Policy
We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "last updated" date.

9. Contact Us
For any privacy-related questions or requests, contact us at ${CONTACT_EMAIL} or ${CONTACT_PHONE}.`,
    },

    terms: {
        title: 'Terms & Conditions',
        content: `Last updated: ${LAST_UPDATED}

Welcome to Manisha Enterprise. By accessing or using our website, you agree to be bound by the following Terms & Conditions. Please read them carefully before placing an order.

1. General
All products listed on this website are subject to availability. We reserve the right to limit quantities, discontinue products, or modify product descriptions, prices, and offers at any time without prior notice.

2. Orders & Acceptance
Placing an order constitutes an offer to purchase. We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud, pricing errors, or stock unavailability. If your order is cancelled after payment, a full refund will be issued.

3. Pricing & Payment
All prices are listed in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise. Payment must be completed through the payment methods available at checkout before an order is processed.

4. Shipping & Delivery
Please refer to our Shipping Policy for processing times, delivery estimates, and charges.

5. Returns & Refunds
Please refer to our Return & Refund Policy for eligibility, process, and timelines.

6. Intellectual Property
All content on this website, including logos, images, product descriptions, and design, is the property of Manisha Enterprise and may not be reproduced or used without written permission.

7. User Conduct
You agree not to misuse this website, including attempting unauthorized access, submitting false information, or using the site for any unlawful purpose.

8. Limitation of Liability
Manisha Enterprise is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website, to the maximum extent permitted by law.

9. Right to Refuse Service
We reserve the right to refuse service to anyone, at any time, for any lawful reason.

10. Governing Law
These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Noida, Uttar Pradesh.

11. Contact
For questions about these Terms, reach out to us at ${CONTACT_EMAIL}.`,
    },

    shipping: {
        title: 'Shipping Policy',
        content: `Last updated: ${LAST_UPDATED}

1. Order Processing
Orders are typically processed and dispatched within 1-2 business days of confirmation, excluding Sundays and public holidays. During sale periods, processing may take slightly longer.

2. Delivery Timelines
Estimated delivery time is 3-7 business days depending on your location, courier serviceability, and local conditions. Remote or non-serviceable pin codes may take additional time.

3. Shipping Charges
Shipping charges, if applicable, are calculated at checkout based on order value, weight, and delivery location. We may offer free shipping on orders above a specified amount, as indicated on the website at checkout.

4. Order Tracking
Once your order is dispatched, you will receive a tracking ID via email or SMS. You can use this to track your shipment on the courier partner's website, or visit our Track Your Order section.

5. Delays
While we strive to meet estimated timelines, delays may occur due to weather, courier disruptions, regional restrictions, or events beyond our control. We appreciate your patience in such cases.

6. Failed Delivery
If a delivery attempt fails due to an incorrect address, unavailability, or refusal to accept the order, additional shipping charges may apply for re-delivery.

7. Contact
For shipping-related queries, contact us at ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
    },

    return: {
        title: 'Return & Refund Policy',
        content: `Last updated: ${LAST_UPDATED}

We want you to be completely satisfied with your purchase. If you're not, here's how our return and refund process works.

1. Return Eligibility
- Returns are accepted within 7 days of delivery.
- Items must be unused, unwashed, and in their original condition with all tags and packaging intact.
- Products marked as "non-returnable" on the product page are not eligible for return.

2. Non-Returnable Items
For hygiene and safety reasons, certain items such as innerwear, customized products, and items marked final sale may not be eligible for return.

3. How to Initiate a Return
Email us at ${CONTACT_EMAIL} with your order number, the item(s) you wish to return, and the reason for return. Our team will guide you through the next steps, including pickup or self-ship instructions where applicable.

4. Quality Check
Once we receive the returned item, it will undergo a quality check to confirm it meets our return criteria. Returns that do not pass this check will be sent back to the customer.

5. Refunds
- Approved refunds are processed within 5-7 business days of receiving and inspecting the returned item.
- Refunds are issued to the original payment method, or as store credit, depending on the option chosen at the time of return.
- Shipping charges, if originally paid, are non-refundable unless the return is due to our error (wrong/defective item).

6. Exchanges
If you'd like a different size or color, mention this when raising your return request. Exchanges are subject to stock availability.

7. Damaged or Incorrect Items
If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of delivery with photos of the item, and we will arrange a free replacement or full refund.

8. Contact
For all return and refund requests, email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}.`,
    },

    contact: {
        title: 'Contact Us',
        content: `We'd love to hear from you. Whether it's a question about an order, a product, or anything else — our team is here to help.

Email: ${CONTACT_EMAIL}
Mobile: ${CONTACT_PHONE}
Address: ${BUSINESS_ADDRESS}

Business Hours: Monday - Saturday, 10:00 AM - 7:00 PM IST

We aim to respond to all emails and calls within 24 business hours. For order-specific queries, please include your order number for faster assistance.`,
    },

    track: {
        title: 'Track Your Order',
        content: `Tracking your order is simple:

1. Check Your Email/SMS
After your order is dispatched, you'll receive a confirmation with a tracking ID and a link to the courier partner's tracking page.

2. My Orders Section
If you have an account with us, log in and visit "My Orders" to view real-time status updates for all your purchases.

3. Order Status Stages
- Order Confirmed: Your order has been placed and payment verified.
- Processing: Your order is being packed.
- Shipped: Your order has left our facility and is with the courier.
- Out for Delivery: Your order will arrive shortly.
- Delivered: Your order has reached you.

If your tracking information hasn't updated in more than 48 hours, or if you're facing any issue, contact us at ${CONTACT_EMAIL} with your order number.`,
    },

    help: {
        title: 'Help Center',
        content: `Frequently Asked Questions

Orders
Q: Can I modify or cancel my order after placing it?
A: Orders can be modified or cancelled within a few hours of placement, before they're processed. Contact us immediately at ${CONTACT_EMAIL}.

Payments
Q: What payment methods do you accept?
A: We accept major debit/credit cards, UPI, net banking, and select wallet payments through our secure checkout.

Shipping
Q: How long does delivery take?
A: Typically 3-7 business days after dispatch. See our Shipping Policy for full details.

Returns
Q: How do I return a product?
A: Email us within 7 days of delivery with your order number and reason for return. See our Return & Refund Policy for full details.

Still Need Help?
If you couldn't find what you're looking for, reach out to us directly at ${CONTACT_EMAIL} or call ${CONTACT_PHONE}, and our team will be happy to assist.`,
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
                            <h1 className="text-3xl font-bold tracking-tight text-white">
        fly<span className="text-amber-500">Fashion</span>
    </h1>

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
                            <strong>GST No.:</strong> {GST_NUMBER}
                            <br />
                            <strong>Mobile:</strong> {CONTACT_PHONE}
                            <br />
                            <strong>Email:</strong>{' '}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="hover:text-white transition"
                            >
                                {CONTACT_EMAIL}
                            </a>
                            <br />
                            <strong>Address:</strong> {BUSINESS_ADDRESS}
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
