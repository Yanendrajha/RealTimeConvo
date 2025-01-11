
const JoinCreateChat = () => {
    return <div className={"min-h-screen flex items-center justify-center"}>
        <div className="border p-8 w-full flex flex-col gap-5 max-w-md rounded dark:bg-gray-900 shadow">
            <h1 className={"text-2xl font-bold text-center"}>
                Join Room / Create Room
            </h1>

            {/* name Div */}
            <div className="border p-8 w-full max-w-md rounded">
                <label htmlFor={name} className="block font-medium mb-2 ">
                    Your Name
                </label>
                <input
                    type="text"
                    id={name}
                    className={"w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600" +
                        "focus: outline-none focus:ring-2 focus:ring-blue-500 rounded-full"}
                />
            </div>

            {/* Room Id Div */}
            <div className="border p-8 w-full max-w-md rounded">
                <label htmlFor={name} className="block font-medium mb-2">
                    Room ID/New Room ID
                </label>
                <input
                    type="text"
                    id={name}
                    className={"w-full dark:bg-gray-600 px-4 py-2 border dark:border-gray-600"
                         + "focus: outline-none focus:ring-2 focus:ring-blue-500 rounded-full"}
                />
            </div>

            {/*<button>*/}
            <div className={"flex  justify-center gap-5"}>
                <button className="px-3 py-2 dark:bg-blue-500 hover:dark:bg-blue-800 rounded-full">
                    Join Room
                </button>
                <button className="px-3 py-2 dark:bg-orange-500 hover:dark:bg-orange-800 rounded-full">
                    Create Room
                </button>
            </div>

        </div>
    </div>;
};

export default JoinCreateChat;