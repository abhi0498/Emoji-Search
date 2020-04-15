import React from 'react';
import EmojiList from './components/EmojiList';
import emojis from './emojis.json'
import { AppContextProvider } from './context/emoji-context';

function App() {
  return (
    <AppContextProvider value={emojis}>
      <div className="App container mx-auto p-6" >
        <h1>Emoji Search <span role='img' aria-label='wink'>😉</span> </h1>
        <EmojiList />
      </div>
    </AppContextProvider>
  );
}

export default App;
