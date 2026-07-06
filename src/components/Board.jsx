export default function Board({ children }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}