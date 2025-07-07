
export const Alert = ({errorText} : {errorText : string}) => {
    return <>
            <div className="w-full p-4 mb-3 text-sm text-red-800 rounded-lg bg-red-100 dark:text-red-400" role="alert">
            <span className="font-medium px-1">Error : </span >{errorText}</div>
    </>
} 