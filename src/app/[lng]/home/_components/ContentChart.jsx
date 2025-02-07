import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

function ContentChart({ contentType, content, locale }) {

  return (
    <Link href={`/${locale}/home/${contentType}/${content?.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original${content?.poster_path}`}
        alt="Netflix Icon"
        height={200}
        width={150}
        style={{ width: 150, height: 200}}
        priority={true}
      />
    </Link>

  );
}

export default ContentChart;
