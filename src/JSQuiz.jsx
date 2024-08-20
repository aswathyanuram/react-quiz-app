import React, { useState } from "react";
import { JS_QUESTIONS } from "../helpers/questionHelper";
import Question from "./Question";
import { message } from "antd";

export default function JSQuiz() {
  const [index, setIndex] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const info = (message, type) => {
    messageApi.open({
      type: type ?? "info",
      content: message,
      duration: 1,
    });
  };

  const current = JS_QUESTIONS[index ?? 0];

  const isLastQuestion = (index ?? 0) == JS_QUESTIONS?.length - 1;
  return (
    <div>
      {contextHolder}
      <Question
        question={current.question}
        options={current.options}
        isLastQuestion={isLastQuestion}
        optionClick={(index) => {
          if (index === current?.answerIndex) {
            info("Correct Answer", "success");
            if (!isLastQuestion) {
              setIndex((old) => {
                return old + 1;
              });
            }
          } else {
            info("Wrong Answer", "error");
          }
        }}
      />
    </div>
  );
}
