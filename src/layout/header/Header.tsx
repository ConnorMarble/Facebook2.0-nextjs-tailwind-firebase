import { ReactElement } from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";
import HeaderIcon from "./HeaderIcon";

export default function Header(): ReactElement {
  const [session] = useSession();

  return (
    <div className="sticky-top-0 z-50 bg-white flex items-center justify-between p-2 lg:px-5 shadow-md w-full">
      <div className="flex items-center cursor-pointer">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt=""
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 cursor-pointer">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden xl:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="hidden sm:inline-flex">
        <div className="flex space-x-2 ">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />{" "}
        <Image
          className="rounded-full "
          onClick={() => signOut()}
          src={session.user.image}
          width={40}
          height={40}
          alt=""
          layout="fixed"
        />
      </div>
    </div>
  );
}
