import Bienvenida from "../components/general/bienvenida";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__left">
            <span>Img</span>
          </div>
          <div className="nav__right">
            <ul>
              <li>algo</li>
              <li>algo</li>
            </ul>
          </div>
        </div>
      </nav>
      <Bienvenida/>
      <Component {...pageProps} />
      <style jsx>{`
        /*    NAV    */
        nav {
          background-image: url("/NAV_GRIEGO_1.jpg");
          background-repeat: round;
          color: #fff;
          font-size: 1.1rem;
          height: 3rem;
          left: 0;
          padding: 0 .5rem;
          position:sticky;
          top: 0;
          z-index: 300;
        }

        .nav__container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: 850px;
          margin: auto;
        }

        .nav__container > .nav__right > ul {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
          list-style-type: none;
          margin-block-end: 0;
          margin-block-start: 0;
        }

        .nav__container > .nav__right > ul > * {
          padding: .5rem;
        }  

        @media screen and (min-width: 500px) {
          .nav__container {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}

export default MyApp;
