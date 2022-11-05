/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
 createContext, useState, useEffect,
} from 'react';
import SpecificationData from './specification-data';

type SpecCtxProps = Spec & {
    changeContent: (val: number) => void,
};

export const SpecCtx = createContext<SpecCtxProps>({} as SpecCtxProps);

const SpecificationContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [specContent, setSpecContent] = useState<Spec>({});
    const defaultState: Spec = {

        image: 'https://asa.com/wordpress/wp-content/uploads/2020/09/news-2020-9-24-boat-anatomy-1024x512.png',

    };
    const changeContent = (val: number) => {
        setSpecContent({ ...SpecificationData[val] });
    };

    useEffect(() => {
        setSpecContent({ ...defaultState });
    }, []);

    return (
      <SpecCtx.Provider value={{ ...specContent, changeContent }}>
        {children}
      </SpecCtx.Provider>
    );
};

export default SpecificationContext;
