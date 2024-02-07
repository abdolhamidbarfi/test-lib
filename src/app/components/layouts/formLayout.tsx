import { useForm } from "react-hook-form"

interface FormType {
    children: React.ReactNode,
    onSubmitForm: () => void,
    className?: string
    buttonTitle: string
}

const FormLayout = ({ children, onSubmitForm, className, buttonTitle }: FormType) => {

    return (
        <form className={`${className} space-y-3 min-h-[50dvh]`} onSubmit={onSubmitForm}>
            {children}
            <div className="!mt-8">
                <input
                    type="submit"
                    value={buttonTitle}
                    className={`px-3 flex w-full justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer`} />
            </div>

        </form>
    )
}

export default FormLayout