import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Boxes } from "./footerbg";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10 mt-10 overflow-hidden">
      <Boxes />
      <div className="relative container mx-auto px-6 flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold mb-4">We Value Your Feedback!</h3>
        <p className="text-gray-400 text-sm mb-4">
          Let us know your thoughts and suggestions.
        </p>
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="Write your feedback..."
            className="w-full p-3 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          <button className="bg-yellow-500 text-black px-5 py-3 rounded-r-lg font-medium hover:bg-yellow-400 transition">
            Submit
          </button>
        </div>

        <div className="flex space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn size={24} />
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-6">
          &copy; {new Date().getFullYear()} Sneha Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
