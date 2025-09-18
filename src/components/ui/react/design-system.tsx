/**
 * Welcome to Craft DS this is the design system file for your project.
 * @file ds.tsx
 * @description Provides layout components for structuring pages and a design system for prose content.
 */

import { cn } from "@/lib/utils";

/**
 * Props for layout components.
 *
 * @typedef {Object} DSProps
 * @property {string} [className] - Additional class names.
 * @property {React.ReactNode} [children] - Child elements to render.
 * @property {string} [id] - HTML id attribute.
 * @property {React.CSSProperties} [style] - Inline styles for the element.
 * @property {{ __html: string }} [dangerouslySetInnerHTML] - HTML content to set dangerously.
 * @property {string} [containerClassName] - Additional class names for inner container elements.
 * @property {boolean} [isArticle] - If true, renders the element as an article.
 */

type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
  containerClassName?: string;
  isArticle?: boolean;
  lang?: string;
  isSpaced?: boolean;
};

/**
 * Section component to wrap content in a section element.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A section element.
 */
export const Section = ({ children, className, id, style }: DSProps) => (
  <section className={cn("py-10 sm:py-20", className)} id={id} style={style}>
    {children}
  </section>
);

/**
 * Container component to wrap content within a centered div with padding.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A div element acting as a container.
 */
export const Container = ({ children, className, id, style }: DSProps) => (
  <div className={cn("container", className)} id={id} style={style}>
    {children}
  </div>
);

/**
 * Nav component to render a navigation container with an inner div.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names for the nav element.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @param {string} [props.containerClassName] - Additional class names for the inner container.
 * @returns {JSX.Element} A nav element with a centered inner container.
 */

export const Nav = ({
  children,
  className,
  id,
  style,
  containerClassName,
}: DSProps) => (
  <nav className={cn(className)} id={id} style={style}>
    <div
      id="nav-container"
      className={cn("container py-3", containerClassName)}
    >
      {children}
    </div>
  </nav>
);

/**
 * Layout component that renders the root HTML element with global settings.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} An HTML element wrapping the entire document.
 */

export const Layout = ({ children, lang, className, style }: DSProps) => (
  <html
    lang={lang ?? "en"}
    suppressHydrationWarning
    className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
    style={style}
  >
    {children}
  </html>
);

/**
 * Main component to wrap the primary content of the page.
 *
 * @param {DSProps} props - Component props.
 * @param {React.ReactNode} props.children - Child elements.
 * @param {string} [props.className] - Additional class names.
 * @param {string} [props.id] - HTML id attribute.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 * @returns {JSX.Element} A main element.
 */
export const Main = ({ children, className, id, style }: DSProps) => (
  <main className={cn("", className)} id={id} style={style}>
    {children}
  </main>
);
