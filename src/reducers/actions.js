import { ADD_PROJECT, REMOVE_PROJECT } from './actionTypes';

export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project
});

export const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  payload: projectId
});