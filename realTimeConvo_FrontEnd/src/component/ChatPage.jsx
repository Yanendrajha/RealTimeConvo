const chatPage = () => {
    return <div className ="">
        <header className={"dark:border-gray-700 border py-5 shadow flex justify-around items-center"}>
            {/*room name container*/}
            <div className={"text-xl font-semibold"}>
                <h1>Room : Family Chat</h1>
            </div>
            {/* username container*/}
            <div>
                <h1>User : Yanendra Jha</h1>
            </div>
            {/*room leave button container*/}
            <div>
                <button className={"dark:bg-red-500 dark:bg-red-700 px-3 py-2 rounded-full"}>
                    Leave Room
                </button>
            </div>
        </header>
    </div>
}

export default chatPage;