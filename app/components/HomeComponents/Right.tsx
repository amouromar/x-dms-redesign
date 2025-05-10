import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Video,
  Images,
  X,
  Focus,
  Paperclip,
  Smile,
  SendHorizontal,
  Mic,
  AudioLines,
  SmilePlus,
} from "lucide-react";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
} from "@/components/ui/emoji-picker";

const Right = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 mx-auto px-4 py-2">
      {/* Header */}
      <div className="flex flex-row items-center justify-between gap-2">
        {/* Avatar */}
        <div className="flex flex-row items-center gap-2">
          <div>
            <Image
              src="/avatar.png"
              alt="avatar"
              width={38}
              height={38}
              className="rounded-full"
            />
          </div>
          {/* Name and time */}
          <div>
            <p className="font-medium">Ricksta</p>
            <p className="text-xs text-gray-500">3m ago</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center gap-4">
          {/* Phone */}
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Phone />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phone call</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Video */}
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Video />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Video call</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Media */}
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Images />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gallery</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Ask Grok */}
          <div>
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
                  <p>Ask Grok</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-300 dark:border-gray-800" />

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged image"
              width={1000}
              height={1000}
              className="object-contain"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar">
        {/* Received */}
        <div className="w-fit px-4 py-2 rounded-full bg-slate-100 dark:bg-gray-700">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="px-2 text-xs text-slate-700 dark:text-gray-400">
            10:12pm
          </p>
          <SmilePlus size={16} />
        </div>

        {/* Sent */}
        <div className="w-fit px-4 py-2 rounded-full bg-blue-500 dark:bg-blue-500 text-white ml-auto">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <p className="px-2 text-xs text-slate-700 dark:text-gray-400 ml-auto">
          10:12pm
        </p>

        {/* Received */}
        <div className="w-fit px-4 py-2 rounded-full bg-slate-100 dark:bg-gray-700">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="px-2 text-xs text-slate-700 dark:text-gray-400">
            10:12pm
          </p>
          <SmilePlus size={16} />
        </div>

        {/* Sent */}
        <div className="w-fit px-4 py-2 rounded-full bg-blue-500 dark:bg-blue-500 text-white ml-auto">
          <div className="flex flex-row items-center">
            <AudioLines className="text-white" />
            <AudioLines className="text-white" />
            <AudioLines className="text-white" />
          </div>
        </div>
        <p className="px-2 text-xs text-slate-700 dark:text-gray-400 ml-auto">
          10:12pm
        </p>

        {/* Received */}
        <div className="w-fit px-4 py-2 rounded-full bg-slate-100 dark:bg-gray-700">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="px-2 text-xs text-slate-700 dark:text-gray-400">
            10:12pm
          </p>
          <SmilePlus size={16} />
        </div>

        {/* Sent */}
        <div className="w-fit px-4 py-2 rounded-full bg-blue-500 dark:bg-blue-500 text-white ml-auto">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <p className="px-2 text-xs text-slate-700 dark:text-gray-400 ml-auto">
          10:12pm
        </p>

        {/* Received */}
        <div
          className="cursor-pointer w-fit"
          onClick={() => handleImageClick("/sample-dm-image.png")}
        >
          <Image
            src="/sample-dm-image.png"
            alt="sample-dm-image"
            width={500}
            height={500}
            className="rounded-sm hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="w-fit px-4 py-2 rounded-full bg-slate-100 dark:bg-gray-700">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="px-2 text-xs text-slate-700 dark:text-gray-400">
            10:12pm
          </p>
          <SmilePlus size={16} />
        </div>

        {/* Sent */}
        <div className="w-fit px-4 py-2 rounded-full bg-blue-500 dark:bg-blue-500 text-white ml-auto">
          <p className="text-sm font-normal">Wabba lubba dub dub</p>
        </div>
        <p className="px-2 text-xs text-slate-700 dark:text-gray-400 ml-auto">
          10:12pm
        </p>
      </div>

      {/* Divider */}
      <hr className="w-full mb-[6px] border-gray-300 dark:border-gray-800" />

      {/* Footer */}
      <div className="w-full flex flex-row items-center gap-2">
        {/* Attachment */}
        <div className="w-1/4 flex flex-row items-center gap-4">
          {/* Camera */}
          <div>
            <Focus className="text-blue-500" />
          </div>

          {/* Microphone */}
          <div>
            <Mic className="text-blue-500" />
          </div>

          {/* Document   */}
          <div>
            <Paperclip className="text-blue-500" />
          </div>

          {/* Emojis */}
          <div className="relative">
            <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>
              <Smile className="text-blue-500" />
            </button>
            {isEmojiPickerOpen && (
              <div className="absolute bottom-10 left-0">
                <EmojiPicker
                  className="h-[326px] rounded-lg border shadow-md"
                  onEmojiSelect={({ emoji }) => {
                    console.log(emoji);
                    setIsEmojiPickerOpen(false);
                  }}
                >
                  <EmojiPickerSearch />
                  <EmojiPickerContent />
                </EmojiPicker>
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="w-3/4 flex flex-row items-center gap-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="Start typing..."
              className="w-full rounded-full bg-slate-200 dark:bg-gray-700 px-4 py-2"
            />
          </div>
          <button>
            <SendHorizontal className="text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
