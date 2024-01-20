import { useFaq } from "./hooks/useFaq";
import { GrouppedFaqData } from "./types/faqData";
import dompurify from "dompurify";

function App() {
  const { grouppedFaqData, isLoading, error } = useFaq();
  const sanitizer = dompurify.sanitize;
  const renderFaqData = (grouppedFaqData: GrouppedFaqData) => {
    return Object.keys(grouppedFaqData).map((key) => {
      const group = grouppedFaqData[key];
      return (
        <div key={key}>
          <h2>{group.name}</h2>
          <ul>
            {group.questions.map((question) => (
              <li key={question.id}>
                <h3>{question.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(question.content),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <div>{renderFaqData(grouppedFaqData.left)}</div>
          <div>{renderFaqData(grouppedFaqData.right)}</div>
        </>
      )}
    </>
  );
}

export default App;
