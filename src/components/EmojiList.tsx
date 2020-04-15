import React, { useState, useEffect } from 'react';
import Emoji from './Emoji';
import SeacrhBar from './SearchBar';

import data from '../emojis.json'

const EmojiList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [emojis, setEmojis] = useState(data)

    useEffect(() => {
        const filterEmojis = () => {
            const filteredEmojis = data.filter(emoji => emoji.unicodeName.includes(searchTerm))
            setEmojis(filteredEmojis)
        }
        filterEmojis();

    }, [searchTerm]);




    return (
        <div>

            <SeacrhBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <div className='flex flex-wrap justify-around items-center mx-12 w-68 mt-2 font-bold  h-10 shadow bg-gray-300'>
                <h1 className='w-1/4 px-2 text-center'>Emoji</h1>
                <h1 className='w-1/4 px-2 text-center'>Name</h1>

                <h1 className='w-1/4 px-2 text-center'>Group</h1>
                <h1 className='w-1/4 px-2 text-center'>SubGroup</h1>
            </div>
            {emojis.map(emoji => <Emoji key={emoji.unicodeName} EmojiData={emoji} />)}

        </div>
    );
}

export default EmojiList;
