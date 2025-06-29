import { UserRoundPen } from 'lucide-react';

export const AccountTabComo = () => {
    return <div className=" w-full space-y-2">
        <div className="transition ease-in-out duration-500 w-full space-x-4 flex p-2 pb-3 hover:shadow-2xl hover:bg-slate-100 rounded-xl hover:border-2 hover:border-gray-800">
            <div className='text-[#6B6B6B]'>
                <UserRoundPen/>
            </div>
            <div className='text-[#6B6B6B] text-base tracking-tight font-[400] '>
                Profile
            </div>
        </div>
        <div> 
            <button  type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Log out</button>
        </div>
    </div>
}