import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export type QuestionProps = {
    question: string,
    answer: string
}

export const Question = (props: QuestionProps) => {
    const [showAnswer, setShowAnswer] = useState(true);

    return (
        <div className="flex-col bg-white shadow-lg rounded-lg p-4 my-4">
            <div className="flex justify-between items-start question rounded-lg px-4 py-2 cursor-pointer transition-colors duration-200" onClick={() => setShowAnswer(!showAnswer)}>
                <p className="text-lg  text-gray-900 mb-2">{props.question}</p>
                <FontAwesomeIcon icon={showAnswer ? faChevronUp : faChevronDown} className="text-gray-600 h-4 w-4 transition-transform" />
            </div>
            {showAnswer &&
                <>
                    <div className="max-w-7xl mx-auto bg-gray-200" style={{ height: "3px", borderRadius: "10px" }}></div>
                    <div className={`pt-2 pl-4 answer transition-all duration-200 text-start ${showAnswer ? 'opacity-100 max-h-100' : 'opacity-0 max-h-0'}`}>
                        <p className="text-gray-700">{props.answer}</p>
                    </div>
                </>
            }
        </div>

    )

}