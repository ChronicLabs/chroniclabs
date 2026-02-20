import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function H1({ children, className = "", gradient = false }: HeadingProps) {
  const gradientClass = gradient
    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
    : "text-white";

  return (
    <h1
      className={`text-5xl md:text-7xl font-bold mb-6 tracking-tighter ${gradientClass} ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "", gradient = false }: HeadingProps) {
  const gradientClass = gradient
    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
    : "text-white";

  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-8 text-center ${gradientClass} ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: HeadingProps) {
  return (
    <h3 className={`text-xl md:text-2xl font-semibold mb-4 text-white ${className}`}>
      {children}
    </h3>
  );
}

export function BodyText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-lg text-gray-400 leading-relaxed ${className}`}>{children}</p>;
}
