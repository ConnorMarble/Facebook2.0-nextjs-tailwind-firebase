import {
  ShoppingBagIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import { ReactElement } from "react";
import SidebarRow from "./SidebarRow";

export default function Sidebar(): ReactElement {
  const [session] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow title={session.user.name} src={session.user.image} />
      <SidebarRow title="Friends" Icon={UserIcon} />
      <SidebarRow title="Groups" Icon={UserGroupIcon} />
      <SidebarRow title="Marketplace" Icon={ShoppingBagIcon} />
      <SidebarRow title="Watch" Icon={DesktopComputerIcon} />
      <SidebarRow title="Events" Icon={CalendarIcon} />
      <SidebarRow title="Memories" Icon={ClockIcon} />
      <SidebarRow title="See More" Icon={ChevronDownIcon} />
    </div>
  );
}
