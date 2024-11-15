// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">Your Company</h2>
          <p className="mt-2">
            Your Company’s brief description or tagline goes here. Stay connected and reach out for more information.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-white">
              {/* Replace with your actual icons */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M... (Facebook SVG path here)" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M... (Twitter SVG path here)" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-blue-700 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M... (LinkedIn SVG path here)" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} PSV Valencia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
