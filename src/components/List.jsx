import useSWR from "swr";
import { getWikiSearchResults } from "./../api/wikiApi";
import { Item } from "./Item";
import img from "../img/Wikipedia-Logo.jpg";

export const List = ({ searchTerm }) => {
  const { isLoading, error, data } = useSWR(
    searchTerm ? searchTerm : null,
    getWikiSearchResults
  );

  let content;
  if (!data) content = <img src={img} alt="wikipedia" />;
  if (isLoading) content = <p>⏳Loading...⌛</p>;
  else if (error) content = <p> ⛔{error.message} ⛔</p>;
  else if (data?.query?.pages) {
    const results = data?.query?.pages;

    content = (
      <div>
        <p className="search-result">Search results</p>
        <ul>
          {Object.values(results).map((result) => {
            return <Item key={result.pageid} result={result} />;
          })}
        </ul>
      </div>
    );
  } else if (data?.batchcomplete === "") {
    content = <p>⛔Sorry, we couldn't find it. Ask something else..⛔</p>;
  }
  return content;
};
