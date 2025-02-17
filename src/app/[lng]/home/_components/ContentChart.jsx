import Image from "next/image";
import Link from "next/link";

function ContentChart({ contentType, content, locale,cardWidth=180,cardHeight=250 }) {  

  return (
    <Link href={`/${locale}/home/${contentType}/${content?.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original${content?.poster_path}`}
        alt="Netflix Icon"
        height={cardHeight}
        width={cardWidth}
        style={{ width: cardWidth, height: cardHeight}}
        priority={true}
      />
    </Link>

  );
}

export default ContentChart;
