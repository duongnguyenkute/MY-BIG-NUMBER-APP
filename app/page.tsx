"use client";
import { useState } from "react";
import InputComponent from "./components/InputComponent";
import ResultComponent from "./components/ResultComponent";
import StepsComponent from "./components/StepsComponent";

export default function BigNumberSum() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [steps, setSteps] = useState<string[]>([]);

  const sumBigNumbers = (stn1: string, stn2: string): string => {
    let result = "";
    let carry = 0;
    let len1 = stn1.length,
      len2 = stn2.length;
    let maxLen = Math.max(len1, len2);
    let calculationSteps: string[] = [];

    for (let i = 0; i < maxLen; i++) {
      const digit1 = i < len1 ? parseInt(stn1[len1 - 1 - i]) : 0;
      const digit2 = i < len2 ? parseInt(stn2[len2 - 1 - i]) : 0;
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;

      calculationSteps.push(
        `Step ${i + 1}: ${digit1} + ${digit2} + nhớ ${carry} → ${result}`
      );
    }

    if (carry > 0) {
      result = carry + result;
      calculationSteps.push(`Final carry: ${carry}, final result: ${result}`);
    }

    setSteps(calculationSteps);
    return result;
  };

  const handleCalculate = () => {
    if (num1 && num2) {
      const sum = sumBigNumbers(num1, num2);
      setResult(sum);
    } else {
      alert("Please enter both numbers!");
    }
  };

  return (
    <div className="bg-green-600 min-h-screen flex items-center justify-center">
      <div className="font-sans p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <h1 className="text-center text-3xl font-extrabold text-green-700 mb-6">
          Big Number Sum Calculator
        </h1>
        <div className="space-y-4">
          <InputComponent
            label="Number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <InputComponent
            label="Number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full bg-green-600 text-white py-3 mt-4 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
        >
          Calculate
        </button>
        {result && <ResultComponent result={result} />}
        {steps.length > 0 && <StepsComponent steps={steps} />}
      </div>
    </div>
  );
}
