import { ADD_PROJECT, REMOVE_PROJECT } from './actionTypes';

// Начальное состояние для проектов
const initialState = {
  projects: []
};

// Редьюсер для управления проектами
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };
    default:
      return state;
  }
};

export default projectsReducer;