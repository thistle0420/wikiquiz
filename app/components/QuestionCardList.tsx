import { BBSData, Question } from "../types/types";
import QuestionCard from "./QuestionCard";

interface QuestionsProps {
  Questions: Question[];
}

const QuestionCardList = ({ Questions }: QuestionsProps) => {
  return (
    <div className="grid px-4 py-4 gap-4">
      {Questions.map((Question: Question) => (
        <QuestionCard key={Question.id} Question={Question} />
      ))}
    </div>
  );
};

export default QuestionCardList;
