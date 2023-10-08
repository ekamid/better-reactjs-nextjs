import React from 'react'

const EmojiList = ({ emojiList }: any) => {
    console.log(emojiList)
    return (
        <div className="flex flex-col gap-5">

            <div className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full max-w-screen-xl p-4">
                    <h3 className="text-white text-center text-3xl">Emojis</h3>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {
                    emojiList.map((item: any, index: number) => (
                        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-5xl"> <span dangerouslySetInnerHTML={{ __html: item.code }}></span></p>
                                <h5 className="mb-0 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                                <span className="bg-blue-100 text-white text-xs font-medium mr-2 px-2.5 py-2 rounded dark:bg-blue-900">{`${item.code}`}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EmojiList