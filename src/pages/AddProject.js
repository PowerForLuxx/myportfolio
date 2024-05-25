import React, { useState } from 'react';
import './AddProject.css';

const AddProject = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const project = { name, link, image: reader.result };
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
        setName('');
        setLink('');
        setImage(null);
      };
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="form-container">
      <h2>Добавить проект</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название проекта:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ссылка на проект:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Изображение проекта:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <button type="submit">Добавить проект</button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
