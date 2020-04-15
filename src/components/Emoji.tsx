import React from 'react';
import { Emoji as EMType } from '../types/emoji';
interface Props {
    EmojiData: EMType
}

const Emoji: React.FC<Props> = props => {

    function fprmat(text1: string) {
        let text = text1.replace('-', ' ')
        let arr: Array<string> = text.split(' ')
        arr = arr.map(a => a[0].toUpperCase() + a.slice(1, a.length))
        text = arr.join(' ')

        return text[0].toUpperCase() + text.slice(1, text.length)
    }
    // "slug": string,
    // "character": string,
    // "unicodeName": string,
    // "codePoint": string,
    // "group": string,
    // "subGroup": string
    const em = props.EmojiData
    return (
        <div className='flex flex-wrap justify-around items-center mx-12 w-68 my-4 h-32 text-lg shadow bg-gray-400'>
            <h1 className='w-1/4 px-2 text-center'>{em.character}</h1>
            <h1 className='w-1/4 px-2 text-center'>{em.unicodeName}</h1>

            <h1 className='w-1/4 px-2 text-center'>{fprmat(em.group)}</h1>
            <h1 className='w-1/4 px-2 text-center'>{fprmat(em.subGroup)}</h1>
        </div>
    );
}

export default Emoji;
