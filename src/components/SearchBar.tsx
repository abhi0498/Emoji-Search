import React from 'react';

interface Props {
    setSearchTerm: (text: string) => void
    searchTerm: string
}

const SeacrhBar: React.FC<Props> = props => {
    // const [searchTerm, setSeachTerm] = useState<string>('')


    return (
        <div className='h-8 flex justify-center'>
            <input placeholder='Start Typing Name Of Emoji' onChange={(e) => { props.setSearchTerm(e.target.value) }} className='bg-gray-200 mr-6   border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type="text" />
            <button className=' bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold  px-4 rounded'>Search</button>
        </div>
    );
}

export default SeacrhBar;
