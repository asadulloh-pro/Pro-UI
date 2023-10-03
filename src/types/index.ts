import { HTMLProps, ReactNode } from "react"

export type ButtonType = {
  typeEl?: "default" | "primary" | "dashed",
  type?: "button" | "submit" | "reset",
  loading?: boolean;
  prefix?: ReactNode;
} & Omit<HTMLProps<HTMLButtonElement>, "type">