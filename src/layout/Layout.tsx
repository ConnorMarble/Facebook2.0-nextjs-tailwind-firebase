import { ReactElement, ReactNode } from "react";
import Header from "./header/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
