interface ResultProps {
    result: string;
  }
  
  export default function ResultComponent({ result }: ResultProps) {
    return (
      <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-green-700 mb-2">Result:</h2>
        <p className="text-2xl font-bold text-gray-800">{result}</p>
      </div>
    );
  }
