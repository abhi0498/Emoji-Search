/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, useContext } from 'react'
// import emojiReducer from './emoji-reducer';
import { Emoji } from '../types/emoji';
import data from '../emojis.json'



const ctxt = createContext<Emoji[]>(data);


export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;

// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(emojiReducer, initialState)

//     function delTransation(id: string) {
//         dispatch({
//             type: 'Delete',
//             payload: id
//         })
//     }    

//     function addTransaction(transaction: Emoji) {
//         dispatch(
//             {
//                 type: 'Add',
//                 payload: transaction
//             }
//         )
//     }
//     const value: React.Provider<any> = {
//         transactions: state.transactions,
//         delTransation,
//         addTransaction
//     }

//     return (<GlobalContext.Provider value={value}>
//         {children}
//     </GlobalContext.Provider>)

// } 


type Props = {
    children: React.ReactNode
};


export const AppContext = ({
    children
}: Props) => {

    return (
        <ctxt.Provider value={data}>
            {children}
        </ctxt.Provider>
    );
};

export const useEmoji = () => useContext(ctxt)
