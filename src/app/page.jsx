import Header from "./components/header";
import Footer from "./components/Footer";
import HeroCards from "./components/HeroCards";

export default function Home() {
  return (
    <section>
      <Header />

      <div className="w-11/12 lg:w-4/5 mx-auto py-5 lg:py-10">
        <div className="space-y-5 py-5 lg:py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Your Bookmarks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <HeroCards
              title="Edit PDF"
              detail="Use the best online tool to edit PDFs in your browser."
              image="edit-pdf"
            />
            <HeroCards
              title="Crop PDF"
              detail="Crop PDF online to a selected area, adjust margin size..."
              image="crop-pdf"
            />
            <HeroCards
              title="Replace Text"
              detail="The easiest way to replace text online."
              image="replace-text-pdf"
            />
            <HeroCards
              title="Rotate PDF"
              detail="Rotate and save your PDF pages online for free."
              image="rotate-pdf"
            />
          </div>
        </div>
        <div className="space-y-5 py-5 lg:py-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Convert from PDF
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <HeroCards
              title="PDF to Word"
              detail="Easily convert PDF to Word document."
              image="pdf-word"
            />
            <HeroCards
              title="PDF to PPT"
              detail="Convert PDF to PowerPoint online."
              image="pdf-ppt"
            />
            <HeroCards
              title="PDF to Excel"
              detail="Convert PDF to Excel for free."
              image="pdf-excel"
            />
            <HeroCards
              title="PDf to JPG"
              detail="Convert PDF files to a set of optimized JPG, PNG, BMP, GIF..."
              image="pdf-jpg"
            />
            <HeroCards
              title="PDf to TXT"
              detail="Convert your PDF to TXT, and extract text from your PDF."
              image="pdf-txt"
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
