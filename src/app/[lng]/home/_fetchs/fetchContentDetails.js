const { cookies } = require("next/headers");

export const fetchContentDetails = async (contentType, id) => {
  const token = (await cookies()).get("token").value;

  const contentResponse = await fetch(
    `http://localhost:5001/api/v1/${contentType}/${id}/details`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const trailerResponse = await fetch(
    `http://localhost:5001/api/v1/${contentType}/${id}/trailers`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const similiarsResponse = await fetch(
    `http://localhost:5001/api/v1/${contentType}/${id}/similar`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const contentTrailers = await trailerResponse.json();
  const contentData = await contentResponse.json();
  const similiarsData = await similiarsResponse.json();
  return {
    content: contentData.content,
    trailers: contentTrailers.trailers,
    similiars: similiarsData.similar,
  };
};
