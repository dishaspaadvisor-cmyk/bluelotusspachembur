export const metadata = {
  title: "Privacy Policy | Blue Lotus Spa",
  description:
    "Learn how Blue Lotus Spa collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  py-20 text-blue-700">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-blue-500">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg md:p-12">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                1. Introduction
              </h2>
              <p className="leading-7">
                Blue Lotus Spa values your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard information
                obtained through our website and services.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                2. Information We Collect
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Name and contact information.</li>
                <li>Email address and phone number.</li>
                <li>Appointment and booking details.</li>
                <li>Information submitted through contact forms.</li>
                <li>Website usage and analytics data.</li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>To schedule and manage appointments.</li>
                <li>To communicate regarding services and bookings.</li>
                <li>To improve our website and customer experience.</li>
                <li>To respond to inquiries and support requests.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                4. Data Security
              </h2>
              <p className="leading-7">
                We implement reasonable security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no internet transmission
                can be guaranteed to be completely secure.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                5. Cookies & Analytics
              </h2>
              <p className="leading-7">
                Our website may use cookies and analytics tools to improve user
                experience, monitor website performance, and understand visitor
                behavior. You may disable cookies through your browser settings.
              </p>
            </div>

            {/* Third Party */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                6. Third-Party Services
              </h2>
              <p className="leading-7">
                We may use trusted third-party providers for website hosting,
                analytics, booking systems, and communication services. These
                providers are required to handle your information responsibly.
              </p>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                7. Information Sharing
              </h2>
              <p className="leading-7">
                We do not sell, rent, or trade your personal information to
                third parties. Information may only be shared when required by
                law or necessary to provide requested services.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                8. Your Rights
              </h2>
              <p className="leading-7">
                You may request access to, correction of, or deletion of your
                personal information by contacting us directly. We will respond
                to reasonable requests in accordance with applicable laws.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                9. Changes to This Policy
              </h2>
              <p className="leading-7">
                We reserve the right to update this Privacy Policy at any time.
                Changes will be posted on this page and become effective
                immediately upon publication.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-blue-50 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                Contact Us
              </h2>
              <p className="leading-7">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us through our Contact
                page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}