import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import Link from "next/link";
import { HiOutlineMoon } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 shadow-textShadow">
      <div className="w-11/12 mx-auto border-b pt-5">
        <div className="flex items-center gap-5 py-5 border-b">
          <h2 className="text-gray-700 text-xl font-semibold">Follow us</h2>
          <Link href="/">
            <FaYoutube className="text-gray-700 text-2xl" />
          </Link>
          <Link href="/">
            <FaTwitter className="text-gray-700 text-2xl" />
          </Link>
          <Link href="/">
            <FaFacebookF className="text-gray-700 text-2xl" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-0 py-10">
          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Internal Links</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#888792]  font-semibold">Documentaries</li>
              <li className="text-[#888792]  font-semibold">Themes</li>
              <li className="text-[#888792]  font-semibold">Chrome casts</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Enterprise</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#888792]  font-semibold">
                Download Chrome Browser
              </li>
              <li className="text-[#888792]  font-semibold">
                Chrome Browser for Enterprise
              </li>
              <li className="text-[#888792]  font-semibold">
                Chrome Browser Devices
              </li>
              <li className="text-[#888792]  font-semibold">ChromeOS</li>
              <li className="text-[#888792]  font-semibold">Google Cloud</li>
              <li className="text-[#888792]  font-semibold">
                Google Workspace
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Internal Links</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#888792]  font-semibold">Documentaries</li>
              <li className="text-[#888792]  font-semibold">Themes</li>
              <li className="text-[#888792]  font-semibold">Chrome casts</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Enterprise</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#888792]  font-semibold">
                Download Chrome Browser
              </li>
              <li className="text-[#888792]  font-semibold">
                Chrome Browser for Enterprise
              </li>
              <li className="text-[#888792]  font-semibold">
                Chrome Browser Devices
              </li>
              <li className="text-[#888792] font-semibold">ChromeOS</li>
              <li className="text-[#888792]  font-semibold">Google Cloud</li>
              <li className="text-[#888792]  font-semibold">
                Google Workspace
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Internal Links</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[#6F6C90] font-semibold">Documentaries</li>
              <li className="text-[#6F6C90] font-semibold">Themes</li>
              <li className="text-[#6F6C90] font-semibold">Chrome casts</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-11/12 mx-auto text-center md:flex justify-between items-end space-y-5 md:space-y-0 
      lg:items-center py-5"
      >
        <div className="lg:flex items-center gap-4 xl:gap-10 space-y-5 lg:space-y-0">
          <div className="flex items-center gap-1">
            <span className="text-3xl text-gray-800 font-bold">Similar</span>
            <span
              className="w-20 h-10 bg-gray-800 rounded-lg p-2 text-lg text-white 
            font-bold"
            >
              Watch
            </span>
          </div>

          <div>
            <ul className="flex flex-wrap items-center gap-5 xl:gap-10">
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                Privacy Policy
              </li>
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                Terms and Conditions
              </li>
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                Cookies Policy
              </li>
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                About us
              </li>
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                EULA
              </li>
              <li className="text-[#888792] text-sm lg:text-base font-bold">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center">
          <HiOutlineMoon size={24} />
        </div>
      </div>
    </footer>
  );
}
