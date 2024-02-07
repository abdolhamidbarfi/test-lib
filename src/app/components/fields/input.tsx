import { memo } from "react"

export interface IInputProps {
    register: any
    title?: string
    type?: string
    className?: string
}

const Input: React.FC<IInputProps> = ({ register, title, type , className }) => {

    return (
        <>
            {
                <div className={className}>
                    {
                        (title && type !== "submit") && <label htmlFor={"id"} className={`block text-sm font-medium leading-6 text-gray-900`}>
                            {title}
                        </label>
                    }
                    <div className="mt-2">
                        {
                            (type === "submit") //condition
                                ? <input
                                    type={type}
                                    value={register?.title}
                                    className={`px-3 flex w-full justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer`} />
                                : <input
                                    {...register}
                                    type={type}
                                    className={`px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                        }
                    </div>
                </div>
            }
        </>
    )
}


export default Input