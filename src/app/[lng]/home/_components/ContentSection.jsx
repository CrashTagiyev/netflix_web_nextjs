import { useEffect, useState } from "react";
import ContentChart from "./ContentChart";

function ContentSection({ currentContent ,locale}) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(locale);
  }, [locale]);

  const fetchTvShows = async () => {
    const response = await fetch(
      `http://localhost:5001/api/v1/${currentContent}/trending`,
      {
        method: "GET",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setContent(data.content);
  };

  useEffect(() => {
    fetchTvShows();
  }, [currentContent]);

  return (
    <div className="flex gap-[80px] mt-[51px] flex-wrap">
      {content?.map((movie, index) => {
        return (
          <div key={index}>
            <ContentChart locale={locale} contentType={currentContent} content={movie} />
          </div>
        );
      })}
    </div>
  );
}
export default ContentSection;
