import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import ChartSection from "./components/ChartSection";
import { fetchTrendingRepos } from "./services/github";
import { saveBookmarks, loadBookmarks } from "./utils/storage";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("react");
  const [bookmarks, setBookmarks] = useState(loadBookmarks());

  useEffect(() => {
    fetchTrendingRepos(query).then(setRepos);
  }, [query]);

  const handleBookmark = (repo) => {
    const updated = bookmarks.some(r => r.id === repo.id)
      ? bookmarks.filter(r => r.id !== repo.id)
      : [...bookmarks, repo];
    setBookmarks(updated);
    saveBookmarks(updated);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌟 GitHub Project Explorer
      </h1>
      <SearchBar setQuery={setQuery} />
      <RepoList repos={repos} onBookmark={handleBookmark} bookmarks={bookmarks} />
      <ChartSection repos={repos} />
    </div>
  );
}

