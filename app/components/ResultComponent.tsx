interface ResultProps {
    result: string;
  }
  
  export default function ResultComponent({ result }: ResultProps) {
    return (
      <div className="mt-4 p-2 bg-white shadow rounded">
        <h2 className="text-lg font-bold text-green-600">Result:</h2>
        <p className="text-xl">{result}</p>
      </div>
    );
  }
  