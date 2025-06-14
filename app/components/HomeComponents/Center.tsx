import React from "react";
import {
  Settings,
  Plus,
  ListFilter,
  Search,
  MailPlus,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Center = () => {
  return (
    <div className="flex flex-col h-full gap-4 mx-auto px-4 py-2">
      {/* Center Side */}

      {/* Header */}
      <div className="flex flex-row justify-between items-center px-4">
        <p className="text-2xl font-bold">Messages</p>
        <div className="flex flex-row gap-4">
          {/* Settings */}
          <button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Settings />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </button>
          {/* Filter */}
          <button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ListFilter />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filter messages</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </button>
          {/* Ask Grok */}
          <button>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/Grok.svg"
                    alt="Grok"
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ask Grok about DMs</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full mt-2 border-gray-300 dark:border-gray-800" />

      {/* Search */}
      <div className="w-full flex flex-row items-center gap-2 border border-gray-300 dark:border-gray-300 rounded-full px-4 py-2 outline-none">
        <Search />
        <input
          type="search"
          placeholder="Search your messages"
          className="w-full outline-none text-sm font-medium"
        />
      </div>

      {/* Main */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        {/* Message Requests */}
        <div className="flex flex-row items-center gap-6 bg-slate-100 dark:bg-gray-900 py-2 rounded-lg cursor-pointer px-4">
          <div className="border border-gray-300 dark:border-gray-300 rounded-full p-2">
            <MailPlus />
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col">
              <p className="font-medium">Message Requests</p>
              <p className="text-sm text-gray-500">You have new requests</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 border border-gray-300 dark:border-gray-300 rounded-full flex items-center justify-center">
                <p className="text-sm font-medium">23</p>
              </div>
              <ChevronRight />
            </div>
          </div>
        </div>

        {/*  Tags */}
        <div>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <p className="text-sm font-medium bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
              All
            </p>
            <div className="flex flex-row items-center gap-2">
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Groups</p>
              </div>
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Read</p>
              </div>
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Unread</p>
              </div>
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Starred</p>
              </div>
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Archived</p>
              </div>
              <div className="bg-slate-200 dark:bg-gray-900 hover:bg-slate-300 dark:hover:bg-gray-800 p-2 rounded-lg">
                <p className="text-sm font-medium">Mentions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="w-full flex flex-col gap-2 overflow-y-auto px-2 scrollbar-hide">
          {/* Message 1 */}
          <div className="w-full flex flex-row items-center gap-2 px-2 py-2 cursor-pointer group bg-gray-200/50 dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="w-16">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">Ricksta</p>
                  <p className="text-sm text-gray-500">@sanchezium</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">3m</span>
                  </p>
                </div>
                <div className="w-4 h-4 mx-4 text-gray-400 opacity-40">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">Wabba lubba dub dub</p>
            </div>
          </div>

          {/* Message 2 */}
          <div className="w-full flex flex-row items-center gap-2 px-2 py-2 cursor-pointer group hover:bg-gray-200/50 hover:dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="w-16">
              <Image
                src="/avatar-1.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">Morty</p>
                  <p className="text-sm text-gray-500">@jessica4life</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">34m</span>
                  </p>
                </div>

                <div className="w-4 h-4 mx-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">
                Never touch code ever again... U SUCK 🫷
              </p>
            </div>
          </div>

          {/* Message 3 */}
          <div className="w-full flex flex-row items-center px-2 py-2 cursor-pointer group hover:bg-gray-200/50 hover:dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="flex items-center max-w-16">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
              <div className="relative -bottom-3 -left-4 w-9 h-6 border border-gray-200 dark:border-gray-400 text-xs text-center font-medium rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                14
              </div>
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">RickRollers</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">54m</span>
                  </p>
                </div>

                <div className="w-4 h-4 mx-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">
                This design is so cool, I love it!
              </p>
            </div>
          </div>

          {/* Message 4 */}
          <div className="w-full flex flex-row items-center gap-2 px-2 py-2 cursor-pointer group hover:bg-gray-200/50 hover:dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="w-16">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">Ricksta</p>
                  <p className="text-sm text-gray-500">@sanchezium</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">3m</span>
                  </p>
                </div>
                <div className="w-4 h-4 mx-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">
                This design is so cool, I love it!
              </p>
            </div>
          </div>

          {/* Message 5 */}
          <div className="w-full flex flex-row items-center gap-2 px-2 py-2 cursor-pointer group hover:bg-gray-200/50 hover:dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="w-16">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">Ricksta</p>
                  <p className="text-sm text-gray-500">@sanchezium</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">3m</span>
                  </p>
                </div>
                <div className="w-4 h-4 mx-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">
                This design is so cool, I love it!
              </p>
            </div>
          </div>

          {/* Message 6 */}
          <div className="w-full flex flex-row items-center gap-2 px-2 py-2 cursor-pointer group hover:bg-gray-200/50 hover:dark:bg-gray-800/50 rounded-lg">
            {/* Avatar */}
            <div className="w-16">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
              />
            </div>

            <div className="flex flex-col w-full">
              {/* Message Header*/}
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-regular">Ricksta</p>
                  <p className="text-sm text-gray-500">@sanchezium</p>
                  <p className="text-xs text-gray-500">&#x2022;</p>
                  <p className="text-sm text-gray-500">
                    <span className="font-normal">3m</span>
                  </p>
                </div>
                <div className="w-4 h-4 mx-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal />
                </div>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-500">
                This design is so cool, I love it!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-300 dark:border-gray-800" />

      {/* Footer */}
      <div className="w-full text-center text-white mx-auto rounded-t-3xl">
        <button className="items-center gap-1 p-2 bg-blue-500 dark:bg-blue-700 rounded-full w-4/5 mx-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Plus />
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new message</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </div>
    </div>
  );
};

export default Center;
