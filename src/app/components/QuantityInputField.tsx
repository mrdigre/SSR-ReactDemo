


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
            
    </div>
    
    )

}

export default QuantityInput;