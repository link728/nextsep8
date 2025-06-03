const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
    {children}
  </button>
);

export default Button;
