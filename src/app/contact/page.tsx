import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
        <p className="text-lg text-gray-300 text-center">
          Contact
        </p>
        <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500">
              <i className="fab fa-facebook-f">Facebook</i>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <i className="fab fa-twitter">Twitter</i>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500">
              <i className="fab fa-instagram">Instagram</i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600">
              <i className="fab fa-linkedin-in">LinkedIn</i>
            </Link>
          </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
