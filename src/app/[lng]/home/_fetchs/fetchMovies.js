export async function trendingMovies() {
  const response = await fetch(`http://localhost:5001/api/v1/movie/trending`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
