import { useState, useRef } from "react";
import dompurify from "dompurify";

import { TQuestion } from "../types/faqData";

import chevron from "../assets/icons8-chevron-30.png";

export const Question = ({ question }: { question: TQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null!);

  const handleOpening = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };
  return (
    <li className="question-li" id={question.id.toString()}>
      <div>
        <button
          onClick={handleOpening}
          className={`question ${isOpen ? "open" : "closed"}`}
        >
          {question.title}
          <img
            width={20}
            height={20}
            src={chevron}
            alt="chevron icon"
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.5s ease",
            }}
          />
        </button>
        <div
          className="answer"
          ref={parentRef}
          style={
            isOpen
              ? {
                  height: parentRef?.current?.scrollHeight + 10 + "px",
                }
              : { height: "0px" }
          }
          dangerouslySetInnerHTML={{
            __html: dompurify.sanitize(question.content),
          }}
        />
      </div>
    </li>
  );
};

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
// interface IProps {
//   open?: boolean;
//   title: string;
// }

// const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
//   const [isOpen, setIsOpen] = useState(open);

//   const handleFilterOpening = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="card">
//         <div>
//           <div className="p-3 border-bottom d-flex justify-content-between">
//             <h6 className="font-weight-bold">{title}</h6>
//             <button type="button" className="btn" onClick={handleFilterOpening}>
//               {!isOpen ? (
//                 <FontAwesomeIcon icon={faChevronDown} />
//               ) : (
//                 <FontAwesomeIcon icon={faChevronUp} />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="border-bottom">
//           <div>{isOpen && <div className="p-3">{children}</div>}</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Collapsible;
