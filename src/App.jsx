// src/App.jsx
import ArtPicture from "./components/ArtPicture";
import { firstPicture, secondPicture, thirdPicture, fourthPicture } from "./data.js";

export function App() {
  return (
    <section>
      <ArtPicture picture={firstPicture} />
      <ArtPicture picture={secondPicture} />
      {thirdPicture && <ArtPicture picture={thirdPicture} />}
      {fourthPicture && <ArtPicture picture={fourthPicture} />}
    </section>
  );
}

export default App;
