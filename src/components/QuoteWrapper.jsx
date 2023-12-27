import React, { useEffect, useState } from 'react'
import leftIcon from '../assets/left.png'
import rightIcon from '../assets/right.png'
import loader from '../assets/infinityLoading.svg'
import axios from 'axios'
import twitterIcon from '../assets/twitter.png'

const QuoteWrapper = () => {
    const [currentQuote, setcurrentQuote] = useState(
        {
            text: "What works for others might not work for you. Find yourself!",
            author: "Chinex"
        }
    )
    const [loading, setLoading] = useState(true)
    const [quotes, setQuotes] = useState([])

    const fetchQuotes = async () => {
        const url = 'https:/type.fit/api/quotes'
        try {
            const response = await axios.get(url)
            const data = response.data
            setQuotes(data)
            setLoading(false)
        } catch (error) {
            console.log(`An error has occured fetching the API, ${error}`)
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchQuotes()
    }, [])

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const nwQuote = quotes[randomIndex]
        setcurrentQuote(nwQuote)

    }

    const handleShare = () => {
        window.open(`https://twitter.com/intent/tweet?text=${currentQuote.text} - ${currentQuote.author.split(',')[0]}`)
    }

    return (
        <div className='mt-14 md:mt-0 w-[350px] md:w-[600px] h-[600px] md:h-[500px] px-6 py-10 md:p-10 bg-[#f4f4f4] rounded shadow-xl md:shadow-2xl space-y-5'>
            <div className='space-y-4'>
                <h1 className='text-3xl text-center font-semibold'>Inspire Me</h1>
                <p className='text-center'>Need a dose of inspiration or a splash of motivation? Look no further! InspireMe is your go-to destination for a curated collection of thought-provoking and uplifting quotes.</p>
            </div>

            <div>
                <div className='space-y-2'>

                    {
                        loading ? (
                            <div className='w-full flex justify-center'>
                                <img src={loader} alt="" />
                            </div>
                        ) : (
                            currentQuote && (
                                <div className='space-y-3 w-full h-28'>
                                    <div className='w-full flex justify-center'>
                                        <img src={rightIcon} alt="" className='w-8' />
                                    </div>

                                    <p className='text-center text-2xl'>{currentQuote.text}</p>

                                    <div className='w-full flex justify-center'>
                                        <img src={leftIcon} alt="" className='w-8' />
                                    </div>
                                    <p className='text-center italic font-semibold'>- {currentQuote.author.split(',')[0]}</p>
                                </div>
                            )


                        )
                    }


                </div>
            </div>

            <div className='p-32 md:pt-20 w-full flex justify-center items-center space-x-2 '>
                <button className='px-4 py-2 bg-[#ebad39] text-white rounded-md hover:bg-[#ffc559] hover:shadow-lg transition-all flex items-center space-x-2' onClick={() => randomQuote()}>
                    <p>Generate</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                </button>
                <button className='px-9 py-2 justify-center bg-[#1c2238] flex items-center rounded space-x-2 text-white hover:bg-[#273050] hover:shadow-lg transition-all' onClick={() => handleShare()}>
                    <p>Share</p>
                    <img className='w-4' src={twitterIcon} alt="" />
                </button>
            </div>

        </div>
    )
}

export default QuoteWrapper
