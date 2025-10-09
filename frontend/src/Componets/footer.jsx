import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-white bg-black body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <a className="flex title-font font-medium items-center text-white mb-4">
              <img
                src="/images/logo-bg.png"
                alt="logo"
                className="w-20 h-20 rounded-full"
              />
              <span className="ml-3 text-xl">D3v++</span>
            </a>
            <p className="text-sm text-gray-400 text-center md:text-left">
              ©{new Date().getFullYear()} D3v++ Developers
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/meettheteam" className="text-gray-400 hover:text-white transition duration-300">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white text-lg font-medium mb-4">Follow Us</h3>
            <span className="inline-flex space-x-3">
              <a className="text-gray-400 hover:text-white transition duration-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-white transition duration-300">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-white transition duration-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-white transition duration-300">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Built with 🤍 by <a href="mailto:devspaceteams@gmail.com" className="text-teal-400 hover:text-teal-300">Devspace Teams</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
