import Link from "next/link";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-white shadow-xl">
      <nav className="w-11/12 mx-auto">
        <div className="block space-y-5 lg:space-y-0 lg:grid grid-cols-3 py-4">
          <Link href="/" className="flex items-center gap-2">
            <IoSettingsSharp className="w-12 h-12 text-3xl bg-blue-500 text-white p-1 rounded-md" />
            <span className="text-xl font-bold">ZinTools</span>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Movies"
              className="w-full h-10 bg-gray-100 rounded-full px-6 outline-none placeholder:font-workSans
              placeholder:font-medium placeholder:text-sm"
            />
            <LuSearch
              size={22}
              color="#111827"
              className="absolute top-2 right-5"
            />
          </div>
          <div className="space-x-5 lg:space-x-0 lg:flex justify-end items-center gap-6">
            <button className="font-semibold text-gray-600">Login</button>
            <button
              className="px-10 py-2.5 bg-blue-600 border border-blue-600 rounded-full
        font-medium text-white hover:bg-transparent hover:text-blue-600 duration-200"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="py-4 lg:py-6">
          <ul className="flex xl:justify-between gap-4 items-center flex-wrap">
            <li className="font-semibold text-gray-600">Stock Video</li>
            <li className="font-semibold text-gray-600">Video Templates</li>
            <li className="font-semibold text-gray-600">Music</li>
            <li className="font-semibold text-gray-600">Sound Effects</li>
            <li className="font-semibold text-gray-600">Graphic Templates</li>
            <li className="font-semibold text-gray-600">Graphics</li>
            <li className="font-semibold text-gray-600">
              Presentation Templates
            </li>
            <li className="font-semibold text-gray-600">Photos</li>
            <li className="font-semibold text-gray-600">Fonts</li>
            <li className="font-semibold text-gray-600">Add-ons</li>
            <li className="font-semibold text-gray-600">More</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
