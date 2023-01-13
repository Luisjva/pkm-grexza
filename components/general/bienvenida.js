import { useState } from "react"

const x = [[],[],[],[],[],[],[]]

export default function Bienvenida() {
  const [closed, setClosed]= useState(false);

  return (
    <div className={closed ? "bienvenida bienvenida--closed" : "bienvenida"}>
      <div className="bienvenida__contenedor">
        <div className="bienvenida__closed" onClick={()=> setClosed(true)}>
          {
            x.map((y, index)=> {
              return(
                <div key={"num"+index} style={{
                  width: "14.285%", 
                  height: "14.285%",
                  background: "#000",
                  top: `${14.285 * index}%`,
                  left: `${14.285 * index}%`,
                  position: "absolute"
                }}></div>
              )
            })
          }
          {
            x.map((y, index)=> {
              return(
                <div key={"num"+index} style={{
                  width: "14.285%", 
                  height: "14.285%",
                  background: "#000",
                  top: `${14.285 * index}%`,
                  right: `${14.285 * index}%`,
                  position: "absolute"
                }}></div>
              )
            })
          }
        </div>
        <p>
          ¡Alto ahí entrenador! ¿Buscas una aventura novedosa?<br/><br/>
          Estás invitado al mayor evento pokémon en la Isla Grexza, el torneo Titanomaquia
        </p>
        <div>
          <button>Historia</button>
          <button>Descargar</button>
        </div>
      </div>
      <style jsx>{`
        .bienvenida {
          align-items: center;
          background: #0007;
          display: flex;
          height: 100vh;
          justify-content: center;
          left: 0;
          position: fixed;
          top: 0;
          width: 100vw;
          z-index: 400;
          text-align: center;
        }

        .bienvenida__contenedor {
          align-items: center;
          background: url("marco.png");
          background-position: center;
          background-size: 100% 100%;
          display: flex;
          font-size: .9rem;
          flex-direction: column;
          height: 90vw;
          justify-content: center;
          padding: 10%;
          width: 90vw;
          position: relative;
        }

        .bienvenida--closed {
          width: 0;
          height: 0;
          overflow: hidden;
        }

        button {
          background: #5930b0;
          border: none;
          color: #fff;
          font-size: .9rem;
          padding: .25rem .5rem;
          margin: .25rem;
          cursor: pointer;
        }

        button:hover {
          transform: scale(1.05)
        }

        .bienvenida__closed {
          height: 20px;
          width: 20px;
          position: absolute;
          top: 6%;
          right: 8%;
          cursor: pointer;
        }

        @media screen and (min-width: 500px) {
          .bienvenida__contenedor {
            height: 80vw;
            width: 80vw;
            font-size: 1.2rem;
            max-width: 500px;
            max-height: 500px;
          }

          button {
            font-size: 1.1rem;
          }

          .bienvenida__closed {
            height: 25px;
            width: 25px;
          }
        }

        @media screen and (max-height: 520px) {
          .bienvenida__contenedor {
            max-height: 90vh;
          }
        }
      `}</style>
    </div>
  )
}