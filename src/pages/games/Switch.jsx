import "./../../App.css"
import { Fragment, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";




const unityContext = new UnityContext({
  productName: "React Unity WebGL Tests",
  companyName: "Jeffrey Lanters",

  loaderUrl: "../../../unity/switch/Webgl.loader.js",
  dataUrl: "../../../unity/switch/Webgl.data",
  frameworkUrl: "../../../unity/switch/Webgl.framework.js",
  codeUrl: "../../../unity/switch/Webgl.wasm",

});

function Switch() {
  useEffect(function () {
    unityContext.on("GameOver1", function (username) {
      console.log("QUITTED = " + username)
      // console.log("YEAHHHH", score)
    });
  }, []);

  return (
    <Fragment>
      <div className="wrapper">
        <div className="unity-wrapper">
          <Unity className="unity-canvas" unityContext={unityContext} />
        </div>
        <h6>
          Made with love by{" "}
          <a href="https://github.com/jeffreylanters">Anand A</a>
        </h6>
      </div>
    </Fragment>
  );
}

export default Switch;
