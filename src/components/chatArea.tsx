import React from 'react';

const ChatArea = () => {
    return (
        <section className="flex flex-col flex-1 dark:bg-gray-600">
            <div className=' text-white bg-blue-400 px-6 py-2 w-fit h-fit m-2 rounded-xl '>Yoo</div>
            <div className=' text-white bg-blue-400  px-6 py-2 w-fit h-fit m-2 rounded-xl '>Yoo</div>
            <div className='text-white bg-green-400  px-6 py-2  w-fit h-fit m-2 rounded-xl' style={{ alignSelf: 'flex-end' }}>Yoo</div>

        </section >
    );
}


export default ChatArea;