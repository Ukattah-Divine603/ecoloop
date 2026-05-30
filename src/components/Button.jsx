import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
}) {
  const styles = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-white",

    secondary: "bg-white/10 border border-white/20 text-white",
  };

  const className = `
    px-6 py-3 rounded-xl
    transition-all duration-300
    inline-flex items-center justify-center
    ${styles[variant]}
  `;

  // 🌍 Internal React route
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // 🔗 External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // 🔘 Normal button
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
