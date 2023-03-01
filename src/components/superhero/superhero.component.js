import { useState } from 'react';
import './superhero.component.css';


function Superhero({ name }) {
    const [likes, setLikes] = useState(0);

    const handleCLick = () => {
        setLikes(likes + 1);
    }

    return (
        <div>
            <strong>{name}</strong>
            <button onClick={handleCLick}>Like</button>
            <em>{likes} likes</em>
        </div>
    )
}

export default Superhero;