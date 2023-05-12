export const DropDown = () => {

    return (
        <div id="dropdown" className="absolute p-2 bottom-12 left-4 h-64 w-60 flex justify-center items-center bg-dropdownBackground text-dropdownText rounded-lg shadow w-44 dark:bg-gray-700" >
            <ul className="flex flex-col gap-3">
                <li className="flex justify-start p-2 bg-dropdownTextBackground w-full">
                    Helpn & FAQ
                </li>
                <li className="flex justify-start p-2 bg-dropdownTextBackground w-full">
                    Settings
                </li>
                <li className="flex justify-start p-2 bg-dropdownTextBackground w-full">
                    clear conversations
                </li>
                <li className="flex justify-start p-2 bg-dropdownTextBackground w-full">
                    <button>log out</button>
                </li>
            </ul>
        </div>
    )
}