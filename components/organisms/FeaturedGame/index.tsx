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
          <GameItem img="/assets/img/Thumbnail-1.png" titleGame="Super Mechs" category="Mobile" />
          <GameItem img="/assets/img/Thumbnail-2.png" titleGame="Call of Duty: Modern" category="Mobile" />
          <GameItem img="/assets/img/Thumbnail-3.png" titleGame="Mobile Legends" category="Mobile" />
          <GameItem img="/assets/img/Thumbnail-4.png" titleGame="Clash of Clans" category="Mobile" />
          <GameItem img="/assets/img/Thumbnail-5.png" titleGame="Valorant" category="Desktop" />
        </div>
      </div>
    </section>
  );
}
