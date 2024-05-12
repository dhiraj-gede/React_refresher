import React, { useState } from "react";
import CoreConcept from "./CoreConcept";

import ComponentImage from "../assets/components.png";
import JSXImage from "../assets/jsx-ui.png";
import StateImage from "../assets/state-mgmt.png";
import PropsImage from "../assets/react-core-concepts.png";
import TabButton from "./TabButton";
export default function Main() {
  const [tabContent, setTabContent] = useState();
  const handleSelect = (selectedButton) => {
    setTabContent(selectedButton.toLowerCase());
  };

  const CORE_CONCEPTS = [
    {
      image: ComponentImage,
      title: "Components",
      description:
        "The core UI building block - compose the user interface by combining multiple components.",
    },
    {
      image: JSXImage,
      title: "JSX",
      description:
        "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    },
    {
      image: PropsImage,
      title: "Props",
      description:
        "Make components configurable (and therefore reusable) by passing input data to them.",
    },
    {
      image: StateImage,
      title: "State",
      description:
        "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    },
  ];

  const EXAMPLES = {
    components: {
      title: "Components",
      description:
        "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
      code: `
                function Welcome() {
                return <h1>Hello, World!</h1>;
            }`,
    },
    jsx: {
      title: "JSX",
      description:
        "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
      code: `
            <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
            </div>`,
    },
    props: {
      title: "Props",
      description:
        "Components accept arbitrary inputs called props. They are like function arguments.",
      code: `
                function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
            }`,
    },
    state: {
      title: "State",
      description:
        "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
      code: `
            function Counter() {
            const [isVisible, setIsVisible] = useState(false);

            function handleClick() {
                setIsVisible(true);
            }

            return (
                <div>
                <button onClick={handleClick}>Show Details</button>
                {isVisible && <p>Amazing details!</p>}
                </div>
            );
            }`,
    },
  };
  return (
    <main>
      <h2>Time to get started!</h2>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("Components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
        </menu>
        {tabContent && (
          <div>
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>{EXAMPLES[tabContent].code}</pre>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
