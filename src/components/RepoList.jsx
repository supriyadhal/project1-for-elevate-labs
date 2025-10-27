import React from "react";
import RepoCard from "./RepoCard";

export default function RepoList({ repos, onBookmark, bookmarks }) {
  if (!repos.length)
    return <p className="text-center text-gray-500">No repositories found.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
          onBookmark={onBookmark}
          bookmarked={bookmarks.some((r) => r.id === repo.id)}
        />
      ))}
    </div>
  );
}

