import { useState } from 'react';

function useUsername(initialValue = '') {
  const [username, setUsername] = useState(initialValue);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return {
    username,
    handleChange,
  };
}

export default useUsername;