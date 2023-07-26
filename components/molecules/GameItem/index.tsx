import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  thumbnails:
    | "Thumbnail-1"
    | "Thumbnail-2"
    | "Thumbnail-3"
    | "Thumbnail-4"
    | "Thumbnail-5";
  titleGame: string;
  category: "Mobile" | "Desktop";
}
export default function GameItem(props: GameItemProps) {
  const { thumbnails, titleGame, category } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={`/assets/img/${thumbnails}.png`}
            width={205}
            height={270}
            alt="Image game"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/assets/icon/console.svg"
                width={54}
                height={36}
                alt="Console icon"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{titleGame}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
