export function formatDate(dateString) {
  const options = { year: "numeric", month: "short" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
