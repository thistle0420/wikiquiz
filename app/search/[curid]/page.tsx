import QuestionSingle from "@/app/components/QuestionSingle";
import { Question } from "@/app/types/types";
import React from "react";

async function getQuestionById(id: number) {
  const response = await fetch(
    `https://45gls1rwcf.execute-api.ap-northeast-1.amazonaws.com/dev/questions/${id}?strlen=300`,
    {
      cache: "no-store",
    }
  );

  const question: Question = await response.json();

  return question;
}

const SearchResult = async ({ params }: { params: { curid: number } }) => {
  const question = await getQuestionById(params.curid);

  return <QuestionSingle Question={question} />;
};

export default SearchResult;
