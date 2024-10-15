import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-purple-100">
      <footer className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Destination.
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Naran Kaghan tour packages
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Skardu tour packages
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Malam Jabba tour packages
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Islamabad tour packages
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
            <p className="text-gray-500 text-sm">
              © Made by Asifa Qasim 💗
            </p>
          </div>
          <div className="flex justify-center mb-6 md:mb-0">
            <span className="inline-flex justify-center space-x-3">
              <Link
                target="_blank"
                href={"https://www.facebook.com/profile.php?id=61556456222532"}
                className="text-gray-500 hover:text-blue-500"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/AsfaQasim?tab=repositories"}
                className="text-gray-500 hover:text-gray-900"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                className="text-gray-500 hover:text-blue-500"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
