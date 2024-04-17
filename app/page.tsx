import QuestionSingle from "./components/QuestionSingle";
import { Question } from "./types/types";

async function getQuestionRandom() {
  const response = await fetch(
    `https://45gls1rwcf.execute-api.ap-northeast-1.amazonaws.com/dev/questions`,
    {
      cache: "no-store",
    }
  );

  const question: Question = await response.json();

  return question;
}

export default async function Home() {
  const question = await getQuestionRandom();

  return <QuestionSingle Question={question} />;
}
