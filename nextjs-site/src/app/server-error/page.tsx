import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InternalServerError() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="formWrapper">
          <div className="phrase">
            HOOOWEE! THIS INTERWEB VOODOO IS CORN-FUSING ME! LOOKS LIKE WE LOG-JAMMED OUR PIPES!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 