export function Textarea({ className, ...props }) {
    return <textarea className={`p-3 rounded ${className}`} {...props} />;
  }
  