import { ReactWebengageInterface, ReactWebengageProps } from "../dist/types/ReactWebengage";


declare class ReactWebengage {
    constructor(props: ReactWebengageProps);
    init: ReactWebengageInterface['init'];
    login: ReactWebengageInterface['login'];
    setAttribute: ReactWebengageInterface['setAttribute'];
    addTrack: ReactWebengageInterface['addTrack'];
    logout: ReactWebengageInterface['logout'];
    onReady: ReactWebengageInterface['onReady'];
}
  
export default ReactWebengage;