import "./../../App.css";
import { Fragment, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const unityContext = new UnityContext({
  productName: "Test",
  companyName: "Metacog",

  loaderUrl: "../../../unity/arrow/arrow.loader.js",
  dataUrl: "../../../unity/arrow/arrow.data",
  frameworkUrl: "../../../unity/arrow/arrow.framework.js",
  codeUrl: "../../../unity/arrow/arrow.wasm",
});

function Arrow() {
  const [change, setChange] = useState(false);

  useEffect(function () {
    unityContext.on("GameOverMeta", function (result) {
      console.log("result = ", result);
      //   console.log("QUITTED = " + username);
      //   console.log("YEAHHHH", score);

      // return <Redirect to='/game/:id/switch'/>;

      // window.location.href = "/game/:id/switch"
      // history.push("/game/:id/switch");

      // browserHistory.push("/game/:id/switch");

      // props.history and props.location are available now inside this component
      // let navigate = useNavigate();
      // return navigate("/game/123/switch");
    //   setChange(true);
    });
  }, []);

  return !change ? (
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
  ) : (
    <Navigate to="/game/123/switch" replace={true} />
  );
}

export default Arrow;
