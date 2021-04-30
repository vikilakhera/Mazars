import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../node_modules/react-tabs/style/react-tabs.css";

export default function First(){
    const [tabIndex, setTabIndex] = useState(0);
    return(
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                    <div class="container">
                    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                        <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                        </TabList>
                        <TabPanel>
                            <p>this is first tab</p>
                        </TabPanel>
                        <TabPanel>
                            <p>this is second tab</p>
                            <button onClick={() => setTabIndex(0)}>go to 1st tab</button>
                            <button onClick={() => setTabIndex(2)}>go to 3rd tab</button>
                        </TabPanel>
                        <TabPanel>
                            <p>this is 3rd tab</p>
                        </TabPanel>
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>

    );
}