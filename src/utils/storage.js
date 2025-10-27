export function saveBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

export function loadBookmarks() {
  const data = localStorage.getItem("bookmarks");
  return data ? JSON.parse(data) : [];
}