import React from 'react';
const ContextWrapper = React.createContext();

function Context(){
    return (
        <ContextWrapper.Provider value="Hello World">
            <GrandParent />
        </ContextWrapper.Provider>
    )
}


function GrandParent () {
    let message = "Be Safe";
  return (
    <>
        <h1>GrandParent</h1>
        <div>↓</div>
        <Parent message={message}/>
    </>
  )
}

function Parent ({message}) {
  return (
    <>
        <h2>Parent</h2>
        <div>↓</div>
        <Child >
            <h1>I am with in the child </h1>
        </Child>
    </>
  )
}

function Child ({children}) {
    const contextValue = React.useContext(ContextWrapper);
    return (
        <>
             <div> {children} </div>
            <h3>Child</h3>
            <div>↓</div>
            <div>{contextValue}</div>
        </>
    )
}


export default Context;


// create Context

// Step: 1--> Create a context wrapper object using a method createContext()
// Step: 2--> Provide a context
// Step: 3--> Consume a context