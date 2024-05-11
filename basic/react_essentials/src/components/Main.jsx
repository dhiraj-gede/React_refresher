import React, { useState } from "react";
import CoreConcept from "./CoreConcept";

import ComponentImage from "../assets/components.png";
import JSXImage from "../assets/jsx-ui.png";
import StateImage from "../assets/state-mgmt.png";
import PropsImage from "../assets/react-core-concepts.png";
import TabButton from "./TabButton";
export default function Main() {
    const [tabContent, setTabContent] = useState('Components');
    const handleSelect=(selectedButton)=>{
        console.log("clicked", selectedButton);
        setTabContent(selectedButton);
    }
  return (
    <main>
      <h2>Time to get started!</h2>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="The Core UI building block"
            image={ComponentImage}
          />
          <CoreConcept
            title="JSX"
            description="Description for JSX"
            image={JSXImage}
          />
          <CoreConcept
            title="Props"
            description="Description for props"
            image={PropsImage}
          />
          <CoreConcept
            title="States"
            description="Description for states"
            image={StateImage}
          />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton onSelect={()=> handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelect('State')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    </main>
  );
}
