import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';

function App() {
  // a URL retorna uma foto randomizada do banco de imagens, porém é preciso indicar um número para evitar repetição seguida
  let strBasicUrl = "https://picsum.photos/200/150?random=";
  let strSufix1 = (1).toString();
  let strSufix2 = (2).toString();

  const [photos, setPhotos] = useState([
    { id: 1, title: 'Foto ' + strSufix1, description: 'Descrição Foto ' + strSufix1, url: strBasicUrl + strSufix1 },
    { id: 2, title: 'Foto ' + strSufix2, description: 'Descrição Foto ' + strSufix2, url: strBasicUrl + strSufix2 },
  ]);

  const handleAddPhoto = () => {
    let nId = (photos.length + 1)
    let strId = nId.toString();
    let strUrl = strBasicUrl + strId;
    const newPhoto = { id: nId, title: 'Foto ' + strId, description: 'Descrição Foto ' + strId, url: strUrl };
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div>
      <Header onAddPhoto={handleAddPhoto} />
      <Gallery photos={photos} />
    </div>
  );
}

export default App;