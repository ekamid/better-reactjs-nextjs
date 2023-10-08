"use client"
import React, { useEffect, useState } from 'react'
import EmojiList from '@/components/EmojiList';
import { getEmoji } from '@/lib/getEmoji';

/**
 * Every time I click on a button it will generate a random number
 * and check whether the number is prime or not.
 * if it is prime, then it will call a API and add a random emoji in the list
 * You have to make sure the EmojiList does not rerender if the list does not change. 
 */


//using React.memu
const MemoizedEmojiList = React.memo(EmojiList);

const RandomEmojiContainer = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [isPrime, setIsPrime] = useState<boolean>(false);
    const [emojiList, setEmojiList] = useState<string[]>([]);
    const [isFetchingEmoji, setIsFetchingEmoji] = useState<boolean>(false);


    function isPrimeNumber(number: number) {
        if (number <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    const generateRandomNumber = () => {
        const randomDecimal = Math.random();

        const randomInRange = 2 + randomDecimal * (1000 - 2);

        const randomInt = Math.round(randomInRange);

        setRandomNumber(randomInt)
        setIsPrime(isPrimeNumber(randomInt))
    }



    useEffect(() => {
        if (isPrime) {
            setIsFetchingEmoji(true);
            (async () => {
                const emoji = await getEmoji()
                setIsFetchingEmoji(false);
                if (emoji) {
                    setEmojiList((prev: any) => [emoji, ...prev])
                }
            })()
        }
    }, [isPrime])


    return (
        <div className="w-full">
            <button disabled={isFetchingEmoji} type="button" onClick={generateRandomNumber} className="block mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Generate Random Number</button>
            <h3 className="text-lg font-bold text-center">{randomNumber} <br /> <span className="text-sm font-normal">({isPrime ? "A Prime Number" : "Not A Prime Number"})</span></h3>

            <MemoizedEmojiList emojiList={emojiList} />
        </div>
    )
}

export default RandomEmojiContainer;