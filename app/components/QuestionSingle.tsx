import Link from "next/link";
import React from "react";
import { Question } from "../types/types";

interface QuestionProps {
  Question: Question;
}

const QuestionSingle = ({ Question }: QuestionProps) => {
  const { id, extracts } = Question;

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{id}</h1>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{extracts}</p>
      </div>

      <Link
        href={`https://ja.wikipedia.org/?curid=${id}`}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
        target="_blank"
      >
        答えを見る
      </Link>
    </div>
  );
};

export default QuestionSingle;
