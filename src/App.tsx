import { useFaq } from "./hooks/useFaq";
import { useFilteredFaq } from "./hooks/useFilteredFaq";
import { Column } from "./components/Column";
function App() {
  const { faqData, isLoading, error } = useFaq();
  const { query, setQuery, filteredFaqQuestions } = useFilteredFaq(
    faqData || { groups: { left: [], right: [] }, questions: [] }
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
          {filteredFaqQuestions?.length ? (
            <>
              <Column
                groups={faqData?.groups.left}
                questions={filteredFaqQuestions}
              />
              <Column
                groups={faqData?.groups.right}
                questions={filteredFaqQuestions}
              />
            </>
          ) : (
            <div>
              <h2>No results found</h2>
              <p>
                make sure if spellng is correct or try with different keywords
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
{
  /* <Group grouppedFaqData={grouppedFaqData.left} />
    <Group grouppedFaqData={grouppedFaqData.right} /> */
}
export default App;
// return keys.some((key) =>
// item[key].toLowerCase().includes(query.toLowerCase())
// );

//every word in input should be included in title or content
//
// const filteredFaqQuestions = useMemo(() => {
//   if (!query) {
//     return faqData?.questions;
//   }

//   const queryWords = query.toLowerCase().split(" ");

//   return faqData?.questions.filter((item) => {
//     const titleWords = item.title.toLowerCase();
//     const contentWords = item.content.toLowerCase();

//     return queryWords.every(
//       (word) => titleWords.includes(word) || contentWords.includes(word)
//     );
//   });
// }, [query, faqData]);
