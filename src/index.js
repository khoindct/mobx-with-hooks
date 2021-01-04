import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useLocalStore } from 'mobx-react';

export const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: bug => store.bugs.push(bug),
    countBug: () => store.bugs.length
  }));

  // const store = {
  //   bugs: ["Centipede"],
  //   addBug: bug => store.bugs.push(bug)
  // };

  return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
}


ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);