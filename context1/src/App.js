import React from 'react';
import ComponentA from './components/ComponentA';
export const EmpContext= React.createContext()
function App(){
  return(
    <div>
      <EmpContext.Provider value={'vikasini'}>
        <ComponentA/>
      </EmpContext.Provider>
    </div>
  )
}

export default App;