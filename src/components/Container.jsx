const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full flex-1 max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;