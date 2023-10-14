import { Unity, useUnityContext} from "react-unity-webgl";


const UnityComponent = ({gameName, gameSize}) => {
  const { unityProvider } = useUnityContext({
    loaderUrl: `build/${gameName}.loader.js`,
    dataUrl: `build/${gameName}.data`,
    frameworkUrl: `build/${gameName}.framework.js`,
    codeUrl: `build/${gameName}.wasm`,
  });

  return <Unity unityProvider={unityProvider} 
  style={gameSize} />;
}

export default UnityComponent;