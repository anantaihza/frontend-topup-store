import GameItem from "@/components/molecules/GameItem";

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-sm">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem thumbnails="Thumbnail-1" titleGame="Super Mechs" category="Mobile" />
          <GameItem thumbnails="Thumbnail-2" titleGame="Call of Duty: Modern" category="Mobile" />
          <GameItem thumbnails="Thumbnail-3" titleGame="Mobile Legends" category="Mobile" />
          <GameItem thumbnails="Thumbnail-4" titleGame="Clash of Clans" category="Mobile" />
          <GameItem thumbnails="Thumbnail-5" titleGame="Valorant" category="Desktop" />
        </div>
      </div>
    </section>
  );
}
