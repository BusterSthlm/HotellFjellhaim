import Header from "../components/layout/Header";
import PageHero from "../components/layout/PageHero";
import bild from "../assets/Images/Bilder_startsida/Hotellet_vinter .jpg";

export default function HomePage(){
    return (
        <>
        <Header overImage />
        <PageHero
          image={bild}
          eyebrow="Vi finns här"
          title="Kontakta oss"
          text="Har du frågor om boende, mat eller upplevelser? Hör gärna av dig."
        />
        <main className="container-page grid gap-12 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <section>
            <h2 className="text-3xl">Välkommen till Fjällheim</h2>
            <p className="mt-4 leading-relaxed">
              Kontakta oss så hjälper vi dig med din vistelse eller din
              förfrågan.
            </p>
            <address className="mt-6 space-y-2 not-italic">
              <p>Högstvägen 7, 791 71 Idre</p>
              <p><a className="underline" href="mailto:booking@fjallheim.se">booking@fjallheim.se</a></p>
              <p><a className="underline" href="tel:+4625320070">+46 (0)253 200 70</a></p>
            </address>
          </section>
          <form
            action="mailto:booking@fjallheim.se"
            method="post"
            encType="text/plain"
            className="grid gap-5 rounded-xl bg-white p-6 shadow-md sm:p-8"
          >
            <label className="grid gap-2 font-medium" htmlFor="name">
              Namn
              <input id="name" name="Namn" type="text" required className="rounded-md border border-brown/30 px-4 py-3 font-lato" />
            </label>
            <label className="grid gap-2 font-medium" htmlFor="email">
              E-post
              <input id="email" name="E-post" type="email" required className="rounded-md border border-brown/30 px-4 py-3 font-lato" />
            </label>
            <label className="grid gap-2 font-medium" htmlFor="phone">
              Telefon
              <input id="phone" name="Telefon" type="tel" className="rounded-md border border-brown/30 px-4 py-3 font-lato" />
            </label>
            <label className="grid gap-2 font-medium" htmlFor="message">
              Meddelande
              <textarea id="message" name="Meddelande" required rows={5} className="resize-y rounded-md border border-brown/30 px-4 py-3 font-lato" />
            </label>
            <button type="submit" className="w-fit rounded-md bg-primary px-6 py-3 font-lato text-white transition hover:bg-tertiary">
              Skicka meddelande
            </button>
          </form>
        </main>
        </>
    );
}