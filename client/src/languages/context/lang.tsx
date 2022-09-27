import React, {
  useReducer,
  useContext,
  FC,
  ReactNode,
  createContext,
} from "react";
import es from "../es.json";
import en from "../en.json";

// Los enum en TS son un conjunto de constantes con nombre
enum LangActionType {
  SET_LANGUAGE = "SET_LANGUAGE",
}

interface LangState {
  language: string;
}

interface LangStateProps {
  children: ReactNode;
}

interface setLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

interface ContextProps {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    traslate: (key: string) => string;
  };
}

const langReducer = (
  state: LangState,
  action: setLanguageAction
): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      };

    default:
      return state;
  }
};

const localStorageLang = localStorage.getItem("language");
const initialState = {
  language: localStorageLang ? localStorageLang : "EN",
};

export const LangContext = createContext({} as ContextProps);

const LangState: FC<LangStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState);
  const setLanguage = (lang: string) => {
    localStorage.setItem("language", lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang,
    });
  };
  const traslate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: any } = {};

    if (language === "EN") {
      langData = en;
    } else if (language === "ES") {
      langData = es;
    }
    return langData[key];
  };
  return (
    <LangContext.Provider
      value={{ state, dispatch: { setLanguage, traslate } }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangState;
