type Props = {
  className?: string;
  ariaHidden?: boolean;
};

/**
 * Hand-drawn ink brushstroke — a thin horizontal divider with organic
 * weight variation. Used between sections to add warmth.
 */
export default function BrushDivider({
  className = "",
  ariaHidden = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 400 12"
      className={`block ${className}`}
      aria-hidden={ariaHidden}
      preserveAspectRatio="none"
    >
      <path
        d="M2,6 C60,3 120,8 200,5 C280,2 340,9 398,6"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M10,7 C80,5 160,8 240,6 C320,4 370,7 390,6"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
