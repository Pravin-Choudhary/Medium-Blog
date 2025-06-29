import { AccountTabComo } from "./AcccountTabComo"

export const AccountTab = () => {
    return <div className="transition ease-in-out duration-1000 rounded-xl shadow-2xl bg-slate-50  mt-2 max-h-50 h-fit w-[200px] absolute right-0 z-50 mr-2 sm:mr-3">
            <div className="p-4 flex justify-center">
                <AccountTabComo/>
            </div>
    </div>
}