import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

  export const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
  
    // Combine into desired format
    const formattedDate = `${year}-${month}-${day}`;
  
    return formattedDate;
  };

  export function formatRouteName(path: string): string {
  return path
    .replace(/^\//, '') // remove leading slash
    .split('-')         // split by hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize
    .join(' ');
}