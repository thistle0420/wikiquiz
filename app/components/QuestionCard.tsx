import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Question } from "../types/types";

interface QuestionProps {
  Question: Question;
}

const QuestionCard = ({ Question }: QuestionProps) => {
  const { id, extracts } = Question;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{id}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>{extracts}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`https://ja.wikipedia.org/?curid=${id}`}
          className="text-blue-500"
          target="_blank"
        >
          答えを見る
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
