import axios from "axios";

export const fetchGitHubRepos = async (username: string) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    return data;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
};
