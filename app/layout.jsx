import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Header";
import "../style/globals.css";

export const metadata = {
  title: "Movies.net",
  description: "discription",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-white mx-auto">
        <div className="max-w-[1250px] mx-auto">
          <Navbar />
        </div>
        <main className="max-w-[1250px] mx-auto">{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
