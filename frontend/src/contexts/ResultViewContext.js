import * as React from 'react'

const ResultViewContext = React.createContext() ;

export const ResultViewProvider = ({ children, value }) => {
  return (
    <ResultViewContext.Provider value={ value }>
      { children }
    </ResultViewContext.Provider>
  )
}

export const useResultViewInfo = () => {
    return React.useContext(ResultViewContext) ;
}
