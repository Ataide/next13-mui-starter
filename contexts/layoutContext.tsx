import React, { ReactNode, createContext, useContext } from "react";

type layoutContextType = {
  value: string;
  myFunction: () => void;
};

const layoutContextDefaults: layoutContextType = {
  value: "",
  myFunction: () => {},
};

const LayoutContext = createContext<layoutContextType>(layoutContextDefaults);

export function useLayoutContext() {
  return useContext(LayoutContext);
}

type Props = {
  children: ReactNode;
};

export function LayoutProvider({ children }: Props) {
  const [value, setValue] = React.useState<string>("Atenção");

  const myFunction = () => {
    alert("Dentro do Provider");
  };

  const _values = {
    value,
    myFunction,
  };

  return (
    <>
      <LayoutContext.Provider value={_values}>
        {children}
      </LayoutContext.Provider>
    </>
  );
}
