import React from "react";
import Nav from "./Nav";
import Content from "./Content"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Content pigs={hogs}/>
		</div>
	);
}

export default App;
