function SplittingText({ text }) {
  const splittedText = text.split("");
  return (
    <span className="text-drop absolute top-1/2 left-[50px] flex -translate-y-1/2">
      {splittedText.map((char, idx) => (
        <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default SplittingText;
