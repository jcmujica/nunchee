const initialState = {
  playlistData: [],
  counters: [{ id: 1, value: 0 }]
};

export default function reducer(state = initialState, action) {

  let index;
  let counterCopy;

  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        playlistData: [...state.playlistData, action.payload]
      }
    case 'REMOVE_LIST':
      return {
        ...state,
        playlistData: state.playlistData.filter((content) => content.id !== action.payload)
      }
    case 'ADD_COUNT':
      index = state.counters.findIndex(counter => counter.id === action.payload.id);
      counterCopy = [...state.counters];
      counterCopy[index].value = counterCopy[index].value + action.payload.value;
      return {
        ...state,
        counters: [...state.counters.slice(0, index), counterCopy[index], ...state.counters.slice(index + 1)]
      }
    case 'SUBTRACT_COUNT':
      index = state.counters.findIndex(counter => counter.id === action.payload.id);
      counterCopy = [...state.counters];
      counterCopy[index].value = counterCopy[index].value - action.payload.value;
      return {
        ...state,
        counters: [...state.counters.slice(0, index), counterCopy[index], ...state.counters.slice(index + 1)]
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counters: [...state.counters, action.payload]
      }
    default:
      return state
  };
};

// Playlist Reducers

export const addToPlaylistAction = (contents) => ({
  type: 'ADD_LIST',
  payload: contents.payload
});

export const removeFromPlaylistAction = (content) => ({
  type: 'REMOVE_LIST',
  payload: content
});

// Counter Reducers

export const addCounterAction = (contents) => ({
  type: 'ADD_COUNTER',
  payload: contents.payload
});

export const addToCounterAction = (content) => ({
  type: 'ADD_COUNT',
  payload: content
});

export const subtractFromCounterAction = (content) => ({
  type: 'SUBTRACT_COUNT',
  payload: content
});