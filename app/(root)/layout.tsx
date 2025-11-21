import React from "react";
import { SiteHeader } from "@/components/site-header";
import { BlurFade } from "@/components/ui/blur-fade";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
    </>

    // <SiteFooter />
  );
}
