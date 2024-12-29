import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Portfolio() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Portfolio</h1>
        <p className="text-lg text-gray-300 text-center">
          Portfolio Page
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
