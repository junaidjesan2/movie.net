import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Header";
import "../style/globals.css";

import DataProvider from "../components/Redux/Provider";

export const metadata = {
  title: "Movies.net",
  description: "discription",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1250px] bg-white mx-auto">
        <DataProvider>
          <div>
            <Navbar />
          </div>
          <main>{children}</main>
          <div>
            <Footer />
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
