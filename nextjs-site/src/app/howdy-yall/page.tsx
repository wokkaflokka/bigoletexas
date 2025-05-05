import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Howdy() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="formWrapper">
        <div style={{ textAlign: 'center' }}>
            HOWDY, Y'ALL! IN CASE YOU WERE HANKERIN' TO KNOW, BIG OLE TEXAS IS A STUMPGRINDIN' PRODUCTION.
            <br />
            <br />
            WE SURE HOPE YOU ENJOYED IT, AS THERE IS MORE TO COME! BUT DON'T BE A STRANGER, YA HEAR? SHOOT US AN E-MAIL AT{' '}
            <a href="mailto:thebossman@stumpgrindin.com" style={{ textDecoration: 'underline' }}>THEBOSSMAN@STUMPGRINDIN.COM.</a>
            <br />
            <br />
            OR, IF YOU'RE ONE OF THEM CITY-SLICKER TYPES, YOU MIGHT RECKON TO CHECK US OUT ON{' '}
            <a href="https://twitter.com/stumpgrindinc" style={{ textDecoration: 'underline' }}>TWITTER.</a>
            <br />
            <br />
            WANT TO KNOW MORE ABOUT ALL THINGS TEXAS? CHECK OUT{' '}
            <a href="https://www.facebook.com/allthingstexan" style={{ textDecoration: 'underline' }}>ALL THINGS TEXAN!</a>
            <br />
            <br />
            Y'ALL COME BACK REAL SOON, NOW, YA HEAR?
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 