import React, { useState } from 'react';
import AppContext from '../Context/AppContext';

const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <AppContext.Provider value={{ projects, addProject }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
