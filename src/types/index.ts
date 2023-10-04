import { HTMLProps, ReactNode } from "react"

export type ButtonProps = {
  typeEl?: "default" | "primary" | "dashed",
  type?: "button" | "submit" | "reset",
  loading?: boolean;
  prefix?: ReactNode;
} & Omit<HTMLProps<HTMLButtonElement>, "type">

export type SpinerProps = {
  className?: string;
  svgClassName?: string;
}