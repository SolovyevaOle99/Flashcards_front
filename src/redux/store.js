import cardsDataReducer from "./cardsData-reducer";
import biblioModulesPageReducer from "./biblioModulesPage-reducer";

let store = {

  _state: {
    BiblioModulesPage: {
      moduleData: [
        { id: 1, termin: 12, nameMod: "fgjhkj" },
      ],
    },
  
    Cards: {
      cardsData: [
        { id: 1, termin: "apple", definition: "яблоко" },
        { id: 2, termin: "computer", definition: "компьютер" },
        { id: 3, termin: "sandwich", definition: "сендвич" },
        { id: 4, termin: "appwsrgde", definition: "яблоко" },
        { id: 5, termin: "computsrhdf", definition: "компьютер" },
        
      ],

      newTermin: '',
      newDefinition: ''
    },
  
  },
  _callSubscriber () {},

  getState () {
    return this._state;
  },
  updateText (observer)  {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.Cards= cardsDataReducer(this._state.Cards, action);
    this._state.BiblioModulesPage =  biblioModulesPageReducer(this._state.BiblioModulesPage, action);

    this._callSubscriber(this._state);

  }
  
}

export default store;
