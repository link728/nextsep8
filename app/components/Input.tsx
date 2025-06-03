type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, name, type = 'text', value, onChange }: InputProps) => (
  <div className="mb-4">
    <label className="block mb-1 font-bold">{label}</label>
    <input
      className="w-full p-2 border rounded"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default Input;
