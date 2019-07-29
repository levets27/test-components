import React from "react";
import PageData from "./pageData";
import PageElement from "./PageElement";
import "./App.css";

function App() {
  const headerElements = PageData["header"];
  const bodyElements = PageData["body"];
  console.log(headerElements, bodyElements);
  return (
    <div className="App">
      <header>
        {headerElements &&
          headerElements.map((el, i) => (
            <PageElement data={el} key={i}>
              {el.children
                ? el.children.map((child, j) => (
                    <PageElement data={child} key={j}>
                      {child.text}
                    </PageElement>
                  ))
                : el.text}
            </PageElement>
          ))}
      </header>
      <div className="body-content">
        {bodyElements &&
          bodyElements.map((el, i) => (
            <PageElement data={el} key={i}>
              {el.children
                ? el.children.map((child, j) => (
                    <PageElement data={child} key={j}>
                      {child.text}
                    </PageElement>
                  ))
                : el.text}
            </PageElement>
          ))}
      </div>
    </div>
  );
}

export default App;
