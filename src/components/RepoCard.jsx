import React from "react";

export default function RepoCard({ repo, onBookmark, bookmarked }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold text-lg"
        >
          {repo.full_name}
        </a>
        <p className="text-gray-600 text-sm mt-2">{repo.description}</p>
      </div>

      <div className="flex justify-between items-center mt-3 text-sm">
        <p>⭐ {repo.stargazers_count}</p>
        <p>🧑‍💻 {repo.language}</p>
        <button
          onClick={() => onBookmark(repo)}
          className={`px-2 py-1 rounded text-white ${
            bookmarked ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {bookmarked ? "Remove" : "Bookmark"}
        </button>
      </div>
    </div>
  );
}

