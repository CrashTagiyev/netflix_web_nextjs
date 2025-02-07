import { fetchContentDetails } from "../../_fetchs/fetchContentDetails";
import ContentChart from "../../_components/ContentChart";

async function page({ params }) {
  const { contentType, id, lng } = await params;
  const content = await fetchContentDetails(contentType, id);

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        {content.trailers && content.trailers.length > 0 && (
          <iframe
            className="w-full  h-[500px] lg:mx-[320px]"
            src={`https://www.youtube.com/embed/${content.trailers[0].key}`}
          ></iframe>
        )}
      </div>
      <div className=" mt-[40px] mx-[40px]">
        <h1 className="text-3xl">{content.content.name}</h1>
        <div className="flex gap-[10px] mt-[20px]">
          {content.content.genres &&
            content.content.genres.map((genre) => (
              <button className=" h-[48px] p-[10px] bg-[#27272A] ">
                {genre.name}
              </button>
            ))}
        </div>
        <p className="mt-[20px]">{content.content.overview}</p>
        <div className="flex gap-[80px] mt-[51px] flex-wrap">
          {content.similiars.map((similiar) => (
            <div className="h-[250px]">
              <ContentChart
                contentType={contentType}
                content={similiar}
                locale={lng}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
