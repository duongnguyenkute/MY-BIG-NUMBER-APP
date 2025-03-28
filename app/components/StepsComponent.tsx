interface StepsProps {
    steps: string[];
  }
  
  export default function StepsComponent({ steps }: StepsProps) {
    return (
      <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Calculation Steps:</h2>
        <ul className="list-decimal pl-5 space-y-2 max-h-40 overflow-y-auto">
          {steps.map((step, index) => (
            <li key={index} className="text-sm text-gray-700">{step}</li>
          ))}
        </ul>
      </div>
    );
  }
