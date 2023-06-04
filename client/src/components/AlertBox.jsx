
const AlertBox = () => {
    return (
        <div className="fixed w-[min(calc(100vw-2.5rem),400px)] max-h-[min(calc(100vh-2.5rem),400px)] 
    left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2
    min-h-[10rem]
    rounded-lg
    shadow-lg 
    bg-gray-200
    z-[500]
space-y-4
py-10
    ">
            <div className="icons w-12 h-12 mx-auto rounded-full bg-orange-400 mb-2"></div>
            <h1 className="text-lg mdL:text-xl text-center italic leading-normal mb-2">Thanks for contacting us will <br /> we get back to you later</h1>
            <span className="
            text-white font-medium shadow
            mx-auto
            bg-blue-400 
w-[10rem] 
py-2 px-4 rounded-md  flex justify-center items-center">Confirm</span>
        </div>
    )
}

export default AlertBox