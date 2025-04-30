function Modal({ children }) {
  return (
    <div
      onScrollCapture={(e) => e.preventDefault()}
      className="fixed inset-0 z-100 flex items-center justify-center bg-[hsl(0,0%,0%,20%)]"
    >
      {children}
    </div>
  );
}

export default Modal;
