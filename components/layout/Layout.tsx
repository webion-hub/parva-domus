import { ReactNode } from "react";
import { ParvaAppbar } from "./ParvaAppbar";
import { ParvaFooter } from "./ParvaFooter";

interface LayoutProps {
  readonly children: ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <ParvaAppbar/>
      {props.children} 
      <ParvaFooter/>
    </>
  )
}