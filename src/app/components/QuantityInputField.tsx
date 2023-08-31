


const QuantityInput = () => {


return (
    
        <div className="flex flex-row border h-8 w-24 rounded-lg border-gray-400 relative mt-4 mb-4">
            
                <button 
                    className="font-semibold border-r bg-blue-500 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                    >
                    <span className="m-auto">-</span>
                </button>
                
                <input
                    type="hidden"
                    className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                    name="custom-input-number"
                    />
                <div
                    className="bg-white w-24 text-xs text-gray-800 md:text-base flex items-center justify-center cursor-default"
                    >
                    <span>2</span>
                </div>

                <button
                    className="font-semibold border-l  bg-blue-500 hover:bg-blue-600 text-white border-gray-400 h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                    >
                    <span className="m-auto">+</span>
                </button>
            
            <div
                className="absolute top-0 w-full ml-6 "
                >
                    <svg width="10" height="12" className="mt-4 fill-current md:mx-auto">
                        <polygon points="0 10, 10 10, 5 0" />
                    </svg>
                    <span
                        className="mt-1 mr-6 text-xs block w-48 flex flex-wrap bg-black p-3 h-8 rounded-lg text-white justify-center items center"
                    >Input validation message
                    </span>

            </div>

        </div>
    
    )

}

export default QuantityInput;