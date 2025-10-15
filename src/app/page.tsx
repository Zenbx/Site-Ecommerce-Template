import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaGem, FaMobile, FaSearch, FaShoePrints, FaShoppingCart, FaTruck, FaUserShield } from "react-icons/fa";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-lg px-6 py-4 flex justify-between items-center",
          scrolled ? "bg-black/80 text-white" : "text-white"
        )}
      >
        <div className="flex items-center gap-4">
          <FaBars />
          <a href="/" className="text-2xl font-bold hover:text-yellow-500">
            JTMB-SHOP
          </a>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} /><a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Catégories</a>
            </li>
            <li>
              <a href="#">Offres</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="font-bold text-2xl">|</li>
            <li>
              <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                Consulter votre panier
              </Button>
            </li>
            <li>
              <Button className="rounded-full bg-white text-black hover:bg-yellow-500 hover:text-gray-900">
                Se connecter
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Carousel */}
      <section className="relative mt-20 w-full h-[680px] overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">L’excellence à portée de main</h1>
          <h2 className="text-2xl">Achetez avec style et confiance.</h2>
          <div className="flex gap-4">
            <Button className="bg-yellow-500 text-black">Découvrir</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Voir nos offres
            </Button>
          </div>
          <div className="mt-4 relative w-[600px]">
            <Input className="rounded-full px-6 h-12" placeholder="montres homme" />
            <Button className="absolute right-2 top-1.5 rounded-full bg-yellow-500 text-black px-6 h-9">
              <FaSearch className="mr-2" /> Rechercher
            </Button>
          </div>
        </div>
        <div className="w-[300%] h-full flex animate-slide">
          <Image src="/banderole1.jpg" alt="Slide 1" width={1920} height={680} className="w-full object-cover" />
          <Image src="/commerce1.jpg" alt="Slide 2" width={1920} height={680} className="w-full object-cover" />
          <Image src="/commerce2.jpg" alt="Slide 3" width={1920} height={680} className="w-full object-cover" />
        </div>
      </section>

      {/* Sections suivantes (À propos, Catégories, Promotions, Avis, Footer) à compléter ici */}
    </div>
  );
}
