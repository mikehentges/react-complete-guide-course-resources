import React from 'react'
import { useState } from 'react';
import TabButton from "./TabButton/TabButton";
import { EXAMPLES } from '../data';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();

    // let tabContent = "Please click a button";

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        // tabContent = selectedButton;
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a topic.</p> : null}
            {selectedTopic ? (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            ) : null}
        </section>
    )
}

export default Examples