import {MdAttachFile, MdSend} from "react-icons/md";

const chatPage = () => {
    return <div className ="">
        {/*This is the header portion*/}
        <header className={"dark:border-gray-700 fixed w-full h-16 dark:bg-gray-900 py-5 shadow flex justify-around items-center"}>
            {/*room name container*/}
            <div className={"text-xl font-semibold"}>
                <h1>Room : Family Chat</h1>
            </div>
            {/* username container*/}
            <div className={""}>
                <h1>User : Yanendra Jha</h1>
            </div>
            {/*room leave button container*/}
            <div>
                <button className={"dark:bg-red-500 dark:bg-red-700 px-3 py-2 rounded"}>
                    Leave Room
                </button>
            </div>
        </header>

       {/*This is the Footer or text sending area*/}
        <div className={"fixed bottom-4 w-full h-16"}>
            <div
                className={"h-full  pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto dark:bg-gray-900"}>

                {/*Text Input Area*/}
                <input type={"text"} placeholder={"Type a message"}
                       className={"w-full  dark:border-gray-600 b dark:bg-gray-800  px-5 py-2 rounded-full h-full focus:outline-none"}/>

                {/*Footer Buttons*/}
                <div className="flex gap-2">
                    {/*Attach Button*/}
                    <button className="dark:bg-purple-600 h-10 w-10  flex   justify-center items-center rounded-full">
                        <MdAttachFile size={20}/>
                    </button>

                    {/*Send Button*/}
                    <button
                        className="dark:bg-green-600 h-10 w-10  flex   justify-center items-center rounded-full"
                    >
                        <MdSend size={20}/>
                    </button>
                </div>
            </div>
        </div>

    </div>
}

export default chatPage;