import { BrowserRouter as Router } from "react-router-dom";

import { useFaq } from "./hooks/useFaq";
import { useFilteredFaq } from "./hooks/useFilteredFaq";

import { Column } from "./components/Column";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const { faqData, isLoading, error } = useFaq();
  const { query, setQuery, filteredFaqQuestions } = useFilteredFaq(
    faqData || { groups: { left: [], right: [] }, questions: [] }
  );

  return (
    <Router>
      <div className="content-wrapper">
        <Header />
        {isLoading ? (
          <div className="noselect-center">
            <span className="spinner" />
          </div>
        ) : error ? (
          <div className="noselect-center">Error</div>
        ) : (
          <div className="main">
            <input
              className="search"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
            />
            {filteredFaqQuestions?.length ? (
              <div className="columns-wrapper">
                <Column
                  groups={faqData?.groups.left}
                  questions={filteredFaqQuestions}
                />
                <Column
                  groups={faqData?.groups.right}
                  questions={filteredFaqQuestions}
                />
              </div>
            ) : (
              <div className="noselect-center">
                <h2>No results found</h2>
                <span>
                  make sure if spellng is correct or try with different keywords
                </span>
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    </Router>
  );
}
export default App;
