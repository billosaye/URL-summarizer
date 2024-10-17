import React, { useState } from "react";
import { copy, linkIcon } from "../assets";
import summaryFunct from "../Utils/summaryFunct"; // Direct import

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [searching, setSearching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const url = article.url; // Get the URL from state
    if (url.trim() !== "") {
      setSearching(true); // Start the loading state
      try {
        // Call the external summary function
        const summaryData = await summaryFunct(url);
        setArticle({ url: "", summary: summaryData }); // Clear the URL and update summary
      } catch (error) {
        console.error("Error getting summary data:", error);
      } finally {
        setSearching(false); // Stop the loading state
      }
    }
  };

  const handleInputChange = (e) => {
    // Clear the summary when changing the input
    setArticle({ ...article, url: e.target.value, summary: "" });
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <img
          src={linkIcon}
          alt="link-icon"
          className="absolute left-0 my-2 ml-3 w-5"
        />

        <input
          type="url"
          placeholder="Enter URL"
          value={article.url} // Controlled input
          onChange={handleInputChange} // Update state on change and clear summary
          required
          className="url_input peer"
        />

        <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          disabled={searching} // Disable button while searching
        >
          <p>↵</p>
        </button>
      </form>

      {searching && <p>Loading summary...</p>} {/* Loading feedback */}

      {article.summary && (
        <div className="summary">
          <h2>Article Summary:</h2>
          <p>{article.summary}</p>
        </div>
      )}
    </section>
  );
};

export default Demo;
