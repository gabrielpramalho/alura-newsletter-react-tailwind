const Input = props => {
    return(
        <input
            className=" py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:font-bold focus:border-2 focus:border-alura-100 focus:invalid:border-2 focus:invalid:border-red-600 focus:invalid:dark:border-2 focus:invalid:dark:border-red-600" 
            {...props}    
        />
    )
}
export default Input