import { useEffect, useState } from "react";
import ContentChart from "./ContentChart";

function ContentSection({ currentContent, locale }) {
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
    <div className="h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[30px] gap-y-[30px] mt-[51px] w-[1160px]">
      <div className="h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[30px] gap-y-[30px] mt-[51px] w-[1160px]">
        {content?.map((movie, index) => {
          return (
            <div key={index} className="self-center ">
              <ContentChart
                locale={locale}
                contentType={currentContent}
                content={movie}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ContentSection;
