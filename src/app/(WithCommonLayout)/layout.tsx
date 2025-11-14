import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import NMContainer from "@/components/ui/core/NMContainer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NMContainer>
          <Navbar />
      <div className="min-h-screen">{children}</div>
      </NMContainer>
      <Footer />
    
    </div>
  );
};

export default CommonLayout;
