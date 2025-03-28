interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function InputComponent({ label, value, onChange }: InputProps) {
    return (
      <div className="mb-3">
        <label className="block text-gray-700">{label}</label>
        <input
          type="text"
          value={value || ""}  // Đảm bảo không bị undefined
          onChange={onChange}
          className="border p-2 rounded w-full"
          placeholder="Enter a number"
        />
      </div>
    );
  }
  