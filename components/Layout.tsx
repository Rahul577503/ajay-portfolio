import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main className="py-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
