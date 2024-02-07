import { memo } from "react"
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { IFieldProps } from "."
import StateManagedSelect from "react-select/dist/declarations/src/stateManager"
export interface IInputProps {
    title?: string
    type?: string
    options?: {label: string , value: string}[]
    settings : StateManagedSelect
    className?: string
}

const SelectOptions: React.FC<IInputProps> = ({ options, title, type , settings , className }) => {

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
                        <Select options={options} {...settings} />
                    </div>
                </div>
            }
        </>
    )
}


export default SelectOptions