import React from "react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-3xl font-medium capitalize mb-4 text-center">
        Payment Info
      </h2>

      {children}
    </>
  );
}
