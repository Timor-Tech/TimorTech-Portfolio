export function Button({ className, children, ...props }) {
    return (
      <button className={`py-2 px-4 rounded ${className}`} {...props}>
        {children}
      </button>
    );
  }
  