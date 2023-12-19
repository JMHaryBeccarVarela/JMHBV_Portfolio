import AnimatedCursor from "react-animated-cursor";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 170, 228"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={9}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
};

export default App;
