// HoverFillButton.jsx
import { useRef } from "react";
import PropTypes from "prop-types";

function HoverFillButton({
  children,
  onClick,
  className = "",
  fillColor = "bg-secondary",
  to,
}) {
  const btn = useRef();

  function onMouseEnter(e) {
    const target = btn.current;
    const circle = target.querySelector(".circle");
    const { top, left } = target.getBoundingClientRect();

    btn.trackingPosition = (e) => {
      circle.style.top = `${e.clientY - top}px`;
      circle.style.left = `${e.clientX - left}px`;
      circle.style.width = "250%";
    };

    target.addEventListener("mousemove", btn.trackingPosition);
  }

  function onMouseLeave() {
    const circle = btn.current.querySelector(".circle");
    circle.style.width = "0px";
    btn.current.removeEventListener("mousemove", btn.trackingPosition);
  }

  if (to)
    return (
      <a
        href={to}
        ref={btn}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`relative overflow-hidden rounded-md border-3 px-8 py-3 font-semibold transition-colors duration-300 ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <span
          className={`circle ${fillColor} pointer-events-none absolute top-0 left-0 z-0 aspect-square -translate-1/2 rounded-full select-none`}
          style={{
            width: "0px",
            transition: "top 0ms, left 0ms, width 0.6s ease, height 0.6s ease",
          }}
        ></span>
      </a>
    );

  return (
    <button
      ref={btn}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative overflow-hidden rounded-md border-2 border-white px-8 py-3 font-semibold transition-colors duration-300 ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`circle ${fillColor} pointer-events-none absolute top-0 left-0 z-0 aspect-square -translate-1/2 rounded-full select-none`}
        style={{
          width: "0px",
          transition: "top 0ms, left 0ms, width 0.6s ease, height 0.6s ease",
        }}
      ></span>
    </button>
  );
}

HoverFillButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  fillColor: PropTypes.string, // example: "bg-red-500"
  to: PropTypes.string,
};

export default HoverFillButton;
