import React from "react";

function WindowTracker() {
  // As we are changing the size of window the width is not changing and button is used to just click the toggle the h1 tag.
  // to display the window size as we change we need to initiate the event listner on window since window is out of subject from React
  //so I need to intract with out side system so I need to use useEffect.

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    
    function windowWidth() {
      console.log("resize");
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", windowWidth);

    return function () {
      console.log("unmounted");

      window.removeEventListener("resize", windowWidth);
    };
  }, []);

  // when we click the button the  h2 element is unmounter from the browser but if we still change the winmndow size  it will call the use effect and lof the resize .
  //this is happening because of the memory leak.
  return (
    <div className="window">
      <h2>The Window Width is {width}</h2>
    </div>
  );
}

export default WindowTracker;
