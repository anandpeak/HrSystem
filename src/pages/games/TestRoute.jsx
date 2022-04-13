import "./../../App.css";
import { Fragment, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Navigate } from "react-router-dom";
import React,{ useState } from "react";


const unityContext = new UnityContext({
  productName: "Test",
  companyName: "Metacog",

  loaderUrl: "../../../unity/test/unityTest.loader.js",
  dataUrl: "../../../unity/test/unityTest.data",
  frameworkUrl: "../../../unity/test/unityTest.framework.js",
  codeUrl: "../../../unity/test/unityTest.wasm",
});

function TestRoute() {
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

export default TestRoute;
