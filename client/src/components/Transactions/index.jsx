import React, { useContext } from 'react';

import { TransactionContext } from '../../context/TransactionContext';
import useFetch from '../../hooks/useFetch';
import shortAddress from '../../utils/shortAddress';
import dummyData from '../../utils/dummyData';

const TransactionCard = ({ addressTo, addressFrom, timestamp, keyword, message, amount, url }) => {
    const gifUrl = useFetch({ keyword });
    return (
        <div
            className="
                bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] sm:min-w-[270px]
                2xl:max-w-[500px] sm:max-w-[5000px] flex-col p-3 rounded-md
                hover:shadow-2xl
            "
        >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="flex flex-col justify-start w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base"><strong>From:</strong> {shortAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-white text-base"><strong>To:</strong> {shortAddress(addressTo)}</p>
                    </a>
                    <p className="text-white text-base"><strong>Amount:</strong> {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base"><strong>Message:</strong> {message}</p>
                        </>
                    )}
                </div>

                <img 
                    src={gifUrl || url}
                    alt="gif"
                    className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
                />

                <div className="bg-black px-5 p-3 w-max rounded-3xl shadow-2xl -mt-5">
                    <p className="bg-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ?
                    (
                        <h3 className='text-white text-3xl text-center my-2'>
                            Latest transactions
                        </h3>
                    )
                    : 
                    (
                        <h3 className='text-white text-3xl text-center my-2'>
                            Connect your wallet to see your latest transactions
                        </h3>
                    )
                }

                <div className="flex flex-wrap justify-center items-center mt-10">
                    {transactions.reverse().map((transaction, index) => (
                        <TransactionCard
                            key={index}
                            {...transaction}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Transactions
