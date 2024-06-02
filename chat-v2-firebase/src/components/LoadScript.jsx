import { useEffect } from "react";
function LoadScript({ src }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.async = true;

    script.onload = () => {
      if (document.readyState === "complete") {
        // Si el DOM ya está cargado
        scriptLoaded();
      } else {
        // Esperar a que el DOM se cargue completamente
        window.addEventListener("load", scriptLoaded);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("load", scriptLoaded);
    };
  }, [src]);

  const scriptLoaded = () => {
    console.log("Script loaded and DOM fully loaded");
    // Aquí puedes inicializar cualquier código que necesite el DOM completamente cargado
  };

  return null;
}

export default LoadScript;
