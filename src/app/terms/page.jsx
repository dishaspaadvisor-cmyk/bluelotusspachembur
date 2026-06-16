export const metadata = {
  title: "Terms & Conditions | Blue Lotus Spa",
  description:
    "Read the Terms & Conditions for using Blue Lotus Spa services and website.",
};

export default function TermsPage() {
  return (
    <main className="bg-white text-slate-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-r  py-16 text-blue-700">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-blue-500">
            Please read these terms carefully before using our website or
            booking any spa services.
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
                1. Acceptance of Terms
              </h2>
              <p className="leading-7">
                By accessing this website or booking services with Blue Lotus
                Spa, you agree to comply with and be bound by these Terms &
                Conditions. If you do not agree, please refrain from using our
                website or services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                2. Spa Services
              </h2>
              <p className="leading-7">
                All spa services are provided subject to availability. We
                reserve the right to modify, suspend, or discontinue any
                service without prior notice.
              </p>
            </div>

            {/* Booking */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                3. Appointment & Booking Policy
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Appointments should be scheduled in advance.</li>
                <li>
                  Please arrive at least 10 minutes before your appointment.
                </li>
                <li>
                  Late arrivals may result in reduced treatment time.
                </li>
                <li>
                  We reserve the right to refuse service in certain situations.
                </li>
              </ul>
            </div>

            {/* Cancellation */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                4. Cancellation Policy
              </h2>
              <p className="leading-7">
                Cancellations should be made at least 24 hours before the
                scheduled appointment. Failure to provide adequate notice may
                result in cancellation fees where applicable.
              </p>
            </div>

            {/* Payments */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                5. Payments & Pricing
              </h2>
              <p className="leading-7">
                Prices displayed on the website are subject to change without
                notice. Full payment may be required at the time of service or
                booking depending on the selected treatment.
              </p>
            </div>

            {/* Health */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                6. Health & Safety
              </h2>
              <p className="leading-7">
                Clients must disclose any relevant medical conditions,
                allergies, injuries, or health concerns before receiving spa
                treatments. Blue Lotus Spa is not responsible for complications
                resulting from undisclosed health information.
              </p>
            </div>

            {/* Website Usage */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                7. Website Usage
              </h2>
              <p className="leading-7">
                You agree not to misuse this website, attempt unauthorized
                access, distribute malicious software, or engage in activities
                that may disrupt website functionality.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                8. Intellectual Property
              </h2>
              <p className="leading-7">
                All website content, including text, images, logos, graphics,
                and design elements, is the property of Blue Lotus Spa and may
                not be copied, reproduced, or distributed without permission.
              </p>
            </div>

            {/* Liability */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                9. Limitation of Liability
              </h2>
              <p className="leading-7">
                Blue Lotus Spa shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of our website or
                spa services.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                10. Changes to Terms
              </h2>
              <p className="leading-7">
                We reserve the right to update these Terms & Conditions at any
                time. Updated versions will be posted on this page with
                immediate effect.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-blue-50 p-6">
              <h2 className="mb-3 text-2xl font-semibold text-blue-700">
                Contact Us
              </h2>
              <p className="leading-7">
                If you have any questions regarding these Terms & Conditions,
                please contact our team through the Contact page or visit our
                spa directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}