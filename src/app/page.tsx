"use client";

import { redirect } from "next/navigation";

import { Routes } from "./Routes";

export default function Home() {
  redirect(Routes.serverActionForm.href);

  return null;
}
