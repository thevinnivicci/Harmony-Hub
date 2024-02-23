import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className=" antialiased overflow-hidden">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
