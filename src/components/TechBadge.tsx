import { useState } from "react";

const NO_ICON_LIST = [
  "programminglanguages",
  "frontend",
  "backend",
  "webdevelopment",
  "education",
  "ionic",
  "openai",
  "oauth",
];

export const TechBadge = ({ tech }: { tech: string }) => {
  const iconQuery = tech.toLowerCase().replace(/[\s.]/g, "");

  const [hasError, setHasError] = useState(() =>
    NO_ICON_LIST.includes(iconQuery),
  );

  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 bg-neutral-900 px-2.5 py-1 border border-neutral-800">
      {!hasError && (
        <img
          src={`https://go-skill-icons.vercel.app/api/icons?i=${iconQuery}`}
          alt=""
          className="w-5 h-5"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
      <span>{tech}</span>
    </span>
  );
};
