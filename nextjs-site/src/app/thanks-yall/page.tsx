import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Thanks() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="formWrapper">
          <div style={{ textAlign: 'center' }}>
            WOOOWEE, FOLKS! HOSTING A WEBSITE IS TUFF BUSINESS! THAT&apos;S WHY WE WANTED TO GIVE A QUICK HOLLER TO THE KIND FOLKS DOWN AT DOTGEEK!
            <br />
            <br />
            <br />
            <br />
            WE TEXANS AREN&apos;T ONES TO TAKE THINGS LIGHTLY, SO FOR YOUR SERVICE TO THIS GREAT STATE, WE&apos;VE BESTOWED YOU THE TITLE OF HONORARY TEXAN&apos;S.
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="http://dotgeek.org">
                <img src="/static/image/honorary.png" alt="Honorary Texan" className="honorary" />
              </a>
            </div>
            <br />
            (JUST DON&apos;T GET UPPITY LIKE THEM YANKEE FOLK, YA HEAR NOW?!)
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 