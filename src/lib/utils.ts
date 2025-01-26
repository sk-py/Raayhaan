import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToHash = (elementId: any) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: "smooth" });
};