import './App.css';
import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function App() {
	return (
		<ChatEngine
			projectID='dc2db771-8b8e-4587-9b72-4e7f209967d1'
			userName='rida'
			userSecret='abcd'
		/>
	);
}
export default App;
