import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import Loader from '../Loader';

import { TransactionContext } from '../../context/TransactionContext';
import shortAddress from '../../utils/shortAddress';

const commonStyles = 
    'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center\
    items-center border-[0.5px] border-gray-400 text-white';

const Input = ({ placeholder, name, type, handleChange }) => {
    return (
        <input
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={(e) => handleChange(e, name)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent border-none text-white text-sm white-glassmorphism"
            step={0.0001}
        />
    )
}

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction({ addressTo, amount, keyword, message });
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className='text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base'>
                        Explore the crypto world. Buy and sell cryptocurrencies easily with Krypto
                    </p>
                    {!currentAccount && (
                        <button
                            type='button'
                            onClick={connectWallet}
                            className='flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]'
                        >
                            <p className="text-white text-base font-semibold">
                                Connect your wallet
                            </p>
                        </button>
                    )}

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={`rounded-tr-2xl sm:rounded-none ${commonStyles}`}>
                            Security
                        </div>
                        <div className={`sm:rounded-tr-2xl rounded-none ${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`sm:rounded-bl-2xl rounded-none ${commonStyles}`}>
                            Web3.0
                        </div>
                        <div className={`rounded-bl-2xl sm:rounded-none ${commonStyles}`}>
                            Low fees
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-startflex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum size={21} color='#fff' />
                                </div>
                                <BsInfoCircle size={17} color='#fff' />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {shortAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input
                            placeholder="Enter your address"
                            name="addressTo"
                            type="text"
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Enter amount (ETH)"
                            name="amount"
                            type="number"
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Enter keyword (GIF)"
                            name="keyword"
                            type="text"
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Enter message"
                            name="message"
                            type="text"
                            handleChange={handleChange}
                        />

                        <div className='h-[1px] w-full bg-gray-400 my-2' />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type='button'
                                onClick={handleSubmit}
                                className='w-full mt-2 border-[1px] border-[#3d4f7c] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]'
                            >
                                <p className="text-white text-base font-semibold">
                                    Send Now
                                </p>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
