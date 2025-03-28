interface StepsProps {
    steps: string[];
  }
  
  export default function StepsComponent({ steps }: StepsProps) {
    return (
      <div className="mt-4 p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold text-blue-600">Calculation Steps:</h2>
        <ul className="list-disc pl-5">
          {steps.map((step, index) => (
            <li key={index} className="text-sm">{step}</li>
          ))}
        </ul>
      </div>
    );
  }
  