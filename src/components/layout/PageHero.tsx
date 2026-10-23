type props = { image: string; eyebrow: string; title: string; text: string };

export default function PageHero({ image, eyebrow, title, text }: props) {
  return (
    <section
      className="relative flex min-h-[340px] items-end bg-cover bg-center md:min-h-[420px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container-page relative pb-10 text-white">
        <p className="eyebrow font-semibold text-serif">{eyebrow}</p>
        <h1 className="whitespace-nowrap text-4xl font-bold leading-tight text-white md:text-5xl font-serif">
          {title}
        </h1>
        <p className="text font-semibold text-serif">{text}</p>
      </div>
    </section>
  );
}
