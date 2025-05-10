import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  Users,
  Verified,
  User,
  MoreHorizontal,
  CircleEllipsis,
} from "lucide-react";

const Left = () => {
  return (
    <div className="">
      {/* Left Sidebar */}

      {/* Links */}
      <div className="flex flex-col list-none">
        {/* Home */}
        <li className="w-[80%] mx-auto flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Home />
          <Link href="/">Home</Link>
        </li>

        {/* Divider */}
        <hr className="w-full mt-2 border-gray-300 dark:border-gray-800" />

        {/* Explore */}
        <li className="w-[80%] mx-auto flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Search />
          <Link href="/">Explore</Link>
        </li>
        {/* Notifications */}
        <li className="w-[80%] mx-auto flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Bell />
          <Link href="/">Notifications</Link>
        </li>
        {/* Messages */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Mail />
          <Link href="/">Messages</Link>
        </li>
        {/* Grok */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Image
            src="/Grok.svg"
            alt="Grok"
            width={24}
            height={24}
            className="dark:invert"
          />
          <Link href="/">Grok</Link>
        </li>
        {/* Bookmarks */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Bookmark />
          <Link href="/">Bookmarks</Link>
        </li>
        {/* Communities */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Users />
          <Link href="/">Communities</Link>
        </li>
        {/* Premium */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Image
            src="/XLogo.svg"
            alt="XLogo"
            width={20}
            height={20}
            className="dark:invert"
          />
          <Link href="/">Premium</Link>
        </li>
        {/* Verified Orgs */}
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <Verified />
          <Link href="/">Verified Orgs</Link>
        </li>
        <li className="w-[80%] mx-auto  flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <User />
          <Link href="/">Profile</Link>
        </li>
        {/* More */}
        <li className="w-[80%] mx-auto flex flex-row items-center gap-4 hover:font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-4 rounded-full cursor-pointer">
          <CircleEllipsis />
          <Link href="/">More</Link>
        </li>
        {/* Post */}
        <li className="w-[80%] mx-auto flex flex-row items-center justify-center gap-4 font-bold bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 px-4 py-4 rounded-full cursor-pointer">
          <Link href="/" className="text-center text-white dark:text-black">
            Post
          </Link>
        </li>
      </div>

      {/* Divider */}
      <hr className="w-full mt-15 border-gray-300 dark:border-gray-800" />

      {/* Profile */}
      <div className="relative mt-3 w-[80%] mx-auto flex flex-row items-center justify-between gap-8 hover:bg-gray-300 dark:hover:bg-gray-700 px-2 py-1 rounded-full cursor-pointer">
        <div>
          <Image
            src="/profile.png"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-bold whitespace-nowrap">Amour Omar</p>
          <p className="text-sm text-gray-500 whitespace-nowrap">@_killtrack</p>
        </div>
        <div>
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default Left;
