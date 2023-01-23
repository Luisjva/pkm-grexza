import Image from "next/image";
import { useEffect, useState } from "react"

const bgLaterales = [
  {
    name: "/arbol-1.png",
    width: 2,
    heightReal: 2,
    height3d: 3.531
  }
]

export function Background({children, name}) {
  const [size, setSize] = useState(undefined);

  useEffect(()=>{
    const container = document.querySelector(`.body-${name}`);

    setSize({
      heightContainer: Math.trunc(container.clientHeight / 16) + 4,
      widthPadding: Math.trunc((window.innerWidth / 16) * 0.1),
      widthInfo: Math.trunc(window.innerWidth / 16 - ((window.innerWidth / 16) * 0.25))
    })

    window.addEventListener("resize", ()=> {
      setSize({
        heightContainer: Math.trunc(container.clientHeight / 16) + 4,
        widthPadding: Math.trunc((window.innerWidth / 16) * 0.1),
        widthInfo: Math.trunc(window.innerWidth / 16 - ((window.innerWidth / 16) * 0.25))
      })
    })
  },[name])

  /*useEffect(()=>console.log(size),[size])*/

  return (
    <div className={"body-" + name}>
      <div className="body__bg__left">
        {function(){
          let bgHeight = 0;
            
          while(size && bgHeight < size.heightContainer) {
            let lineHeight = 0; // Esta variable es para saber el alto de la imagen mas grande
            let lineWidth = 0; // y esta es para controlar el width que se lleva para validar si se crean mas elementos o no
            
            let imgs = [];
            while(lineWidth < size.widthPadding) {
              let img = bgLaterales[0];
              if(img.heightReal > lineHeight) lineHeight = img.heightReal;

              lineWidth += img.width
              
              console.log("bg #" + bgHeight + ", casilla #" + lineWidth)
            }

            bgHeight += lineHeight
          }

          return (
            <Image
              src={bgLaterales[0].name} 
              width={bgLaterales[0].width * 16}
              height={bgLaterales[0].height3d * 16}
              alt="árbol"
            />
          )
        }()}
      </div>
      {children}
      <style jsx>{`
        .body-${name} {
          padding: 2rem ${size ? (size.widthPadding * 16 + 1) + "px" : "22.5%"}; 
          background: url("/bg-bosque.png");
          background-size: 16px 16px;
          position: relative;
        }

        /* Lateral izquierdo */
        .body__bg__left {
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          background: #fff7;
        }
      `}</style>
    </div>
  )
}