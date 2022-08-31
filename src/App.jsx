import { useState } from "react";
import "./styles.css";

export default function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (url) {
      url.trim();

      let replaceText = url.slice(25, 32);
      let updatedUrl = url.replace(replaceText, "uc?export=view&id=");
      let finalUrl = updatedUrl.replace("/view?usp=sharing", "");

      setResult(finalUrl);
      setShow(true);

      // to add => uc?export=view&id= instead of => file/d/
      // to remove => /view?usp=sharing
      // base url
      // https://drive.google.com/file/d/15P1xnA8MpKNYJypaFffT7bBpmrAkmD_m/view?usp=sharing
      // changed url
      // https://drive.google.com/uc?export=view&id=15P1xnA8MpKNYJypaFffT7bBpmrAkmD_m
    }
  };

  return (
    <div className="App">
      <h1>Google Image HTML Link Generator</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="paste your link here"
          onChange={(e) => setUrl(e.target.value)}
          type="url"
        />
        <button>Generate</button>
      </form>

      <div className="link">
        <h3>HTML Friendly Link</h3>

        {show && <code>{result}</code>}
      </div>
    </div>
  );
}
