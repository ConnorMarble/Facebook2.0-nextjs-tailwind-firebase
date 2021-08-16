import Image from "next/image";
import { ReactElement } from "react";
import { HeroIconType } from "src/types/types";

interface SidebarRowProps {
  Icon?: HeroIconType;
  title: string;
  src?: string;
}

export default function SidebarRow({
  Icon,
  title,
  src,
}: SidebarRowProps): ReactElement {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          alt=""
          className="rounded-full"
          src={src}
          height={30}
          width={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}
