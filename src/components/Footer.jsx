import React from "react";
import appStore from "../assets/images/appstore.png";
import googlePlay from "../assets/images/googleplay.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="container mx-auto">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  About Gumtree
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Advertise With Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Contact Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">
              Help & Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Policies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* More From Us Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">
              More From Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Car Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Gumtree Life
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Car Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Sell My Car
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-300"
                >
                  Upcycle Revolution
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Apps Section */}
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Mobile Apps</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-block">
                <img src={appStore} alt="App Store" className="h-12" />
              </a>
              <a href="#" className="inline-block">
                <img src={googlePlay} alt="Google Play" className="h-12" />
              </a>
              <a
                href="#"
                className="hover:text-teal-400 transition duration-300 mt-2"
              >
                More About Our Apps
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Partners Section */}
        <div className="flex flex-col md:flex-row justify-between py-6 border-t border-gray-700">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">
              Join Gumtree Community
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.438 16.078c-.109.261-.438.438-.812.391-.375-.047-2.438-.531-3.344-1.938-.531-.813-1.219-2.781-2.156-2.781-.938 0-1.125.375-1.203.531-.094.172-.234.547.703 1.641 1.048 1.219 1.219 1.781 1.219 1.781.094.297-.047.547-.328.641-.328.109-1.141.328-1.625.328-2.297 0-4.703-1.875-4.703-5.156 0-3.281 2.406-5.156 4.703-5.156.328 0 .609.047.891.172 1.172.5 2.797 2.047 2.797 2.047.094.094.141.234.141.375 0 .141-.047.281-.141.375 0 0-.609.547-1.594.547s-1.484-.344-1.484-.344c-.094-.047-.141-.141-.141-.234 0-.094.047-.188.141-.234.234-.094.469-.187.469-.187.469-.203.766-.438.766-.812 0-.375-.281-.625-.516-.719-.234-.094-.562-.141-1.031-.141-1.922 0-3.375 1.609-3.375 3.859 0 2.25 1.453 3.859 3.375 3.859.375 0 .75-.047 1.031-.141.234-.094.516-.344.516-.719 0-.375-.297-.609-.766-.812 0 0-.234-.094-.469-.187-.094-.047-.141-.141-.141-.234 0-.094.047-.188.141-.234 0 0 .609-.344 1.484-.344s1.594.547 1.594.547c.094.094.141.234.141.375 0 .141-.047.281-.141.375 0 0-1.625 1.547-2.797 2.047-.281.125-.562.172-.891.172-2.297 0-4.703-1.875-4.703-5.156s2.406-5.156 4.703-5.156c1.484 0 2.766.75 3.516 1.547.75-.75 1.859-1.547 3.516-1.547 2.297 0 4.703 1.875 4.703 5.156 0 3.234-2.453 5.109-4.719 5.109-.375 0-.719-.047-1.031-.172-.328-.125-.609-.328-.75-.547z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-medium mb-4 mt-6 md:mt-0">
              Gumtree Partners
            </h3>
            <div className="bg-gray-700 py-1 px-4 inline-block rounded">
              <span className="text-white">Motors</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 mt-4 text-sm text-gray-400 text-center">
          <p>© Copyright 2000-2025 Gumtree.com Limited. All rights reserved.</p>

          <p className="mt-4">
            Gumtree.com Limited (FRN 560524) is an Appointed Representative of
            Consumer Credit Compliance Limited who are authorised and regulated
            by the Financial Conduct Authority (FRN 631736).
          </p>

          <p className="mt-4">
            The permissions of Consumer Credit Compliance Limited as a Principal
            firm allow Gumtree.com Limited to undertake insurance and credit
            broking. Gumtree.com Limited acts as a credit broker, not a lender.
            We will refer you to CarMoney Limited (FRN 674094) for credit, we
            receive a fixed fee commission up to an agreed number of leads, and
            additional commission for those above the agreed level. We will
            refer you to Inspop.com Ltd T/A Confused.com (FRN 310635) for
            Insurance and we receive a fixed fee commission. You will not pay
            more as a result of our commission arrangements.
          </p>

          <p className="mt-4">
            Gumtree.com Limited, registered in England and Wales with number
            03934849, 27 Old Gloucester Street, London, WC1N 3AX, United
            Kingdom. VAT No. 476 0835 68.
          </p>

          <div className="mt-6 md:flex md:justify-center md:space-x-4">
            <a
              href="#"
              className="hover:text-teal-400 transition duration-300 block mb-2 md:mb-0"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition duration-300 block mb-2 md:mb-0"
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition duration-300 block mb-2 md:mb-0"
            >
              Privacy Settings
            </a>
            <a
              href="#"
              className="hover:text-teal-400 transition duration-300 block"
            >
              & Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
