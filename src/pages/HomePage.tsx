import Header from "../components/layout/Header";
import backgroundImage from "../assets/Images/Bilder hemsida/IMG_7906.jpg";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "150%",
        backgroundPosition: "20% center",
      }}
    >
      <Header />
      <main></main>
    </div>
  );
}
