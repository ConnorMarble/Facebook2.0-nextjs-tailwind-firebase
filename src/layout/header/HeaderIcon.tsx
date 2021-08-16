import { ReactElement } from "react";
import { HeroIconType } from "src/types/types";

interface HeaderIconProps {
  Icon: HeroIconType;
  active?: boolean;
}

export default function HeaderIcon({
  Icon,
  active,
}: HeaderIconProps): ReactElement {
  return (
    <div className="group flex items-center cursor-pointer sm:px-3 md:px-7 sm:hover:bg-gray-100 sm:h-14 rounded-xl active:border-b-2 active:border-blue-500">
      <Icon
        className={`h-6 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
}
