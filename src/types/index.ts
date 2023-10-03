import { HTMLProps, ReactNode } from "react"

export type ButtonType = {
  typeEl?: "default" | "primary",
  type?: "button" | "submit" | "reset",
  loading?: boolean;
  prefix?: ReactNode;
} & Omit<HTMLProps<HTMLButtonElement>, "type">