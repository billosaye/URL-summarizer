import axios from 'axios';

const summaryFunct = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: url,
      lang: 'en',
      engine: '2',
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY, // Use the API key from your .env file
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.summary; // Return the summary from the response data
  } catch (error) {
    console.error("Error fetching summary:", error);
    return null; // Return null if there's an error
  }
};

export default summaryFunct;
