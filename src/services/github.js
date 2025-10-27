import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchTrendingRepos(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search/repositories`, {
      params: {
        q: query || "stars:>1000",
        sort: "stars",
        order: "desc",
        per_page: 10,
      },
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}

