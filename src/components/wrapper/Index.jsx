import Navbar from "../wrapper/Navbar";
import Footer from "../wrapper/Footer";

export default function NavAndFooterWrap({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
