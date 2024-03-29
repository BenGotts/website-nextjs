import { FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaDonate } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-blue-600 text-white p-4 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-center md:text-left md:flex-1">
            <p>&copy; {new Date().getFullYear()} Ben Gottschalk</p>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0">
            <Link href="/about" className="hover:underline flex items-center">About</Link>
            <a href="mailto:benjgottschalk+website@gmail.com" className="hover:underline flex items-center">Contact</a>
            {/* <a href="/contact" className="hover:underline flex items-center">Contact</a> */}
            {/* Donate link, assuming you have a specific URL for donations */}
            <a href="https://ko-fi.com/bengottschalk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center">
              <FaDonate className="mr-2" /> Donate
            </a>
            <a href="https://www.linkedin.com/in/benjgottschalk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center">
              <FaLinkedin />
            </a>
            <a href="https://github.com/BenGotts" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/c/BenjaminGottschalk" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@bengotts" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 flex items-center">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
