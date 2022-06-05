import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default function App () {
  
  const [query, setQuery] = useState('');
  console.log(query)
  const onFormSubmit = input => {
    setQuery(input)
  };

  
  return (
      <div className="App">
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery searchQuery={query} />
      </div>
    );
}