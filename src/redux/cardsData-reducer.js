const ADD_WORD = 'ADD_WORD';
const UPDATE_NEW_TERM = 'UPDATE_NEW_TERM';
const UPDATE_NEW_DEFIN = 'UPDATE_NEW_DEFIN';

const cardsDataReducer = (state, action) => {

    switch(action.type) {
        case ADD_WORD:
            let cards = {
                id: 7,
                termin: state.newTermin,
                definition: state.newDefinition,
              };
            
              state.cardsData.push(cards);
              state.newTermin = '';
              state.newDefinition ='';
              return state;
              
        case UPDATE_NEW_TERM:
            state.newTermin = action.newText;
            return state;

        case UPDATE_NEW_DEFIN:
            state.newDefinition = action.newText;
            return state; 

        default:
            return state;
    }

    
}


export const addWordsActionCreator = () => {
    return {
      type: ADD_WORD
    }
}
  
export const updateNewTermActionCreator = (term) => {
    return {
      type: UPDATE_NEW_TERM,
      newText: term
    }
}
  
  
export const updateNewDefinActionCreator = (defin) => {
    return {
      type: UPDATE_NEW_DEFIN,
      newText: defin
    }
}

export default cardsDataReducer;