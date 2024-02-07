import StateManagedSelect from "react-select/dist/declarations/src/stateManager"
import Input from "./input"
import { GroupBase, OptionsOrGroups } from 'react-select'
import { FieldValues, RegisterOptions, UseFormRegister, UseFormRegisterReturn, UseFormReturn } from "react-hook-form"
import SelectOptions from "./selectOptions"


export interface IFieldProps {
    fields: {
        fieldType: string
        register?: UseFormRegisterReturn
        select?: {
            options?: { label: string, value: string }[], settings?: StateManagedSelect
        }
        title?: string
        className?: string
    }[]
}

const Fields: React.FC<IFieldProps> = ({ fields }) => {

    return (
        <>
            {
                fields?.map(({ fieldType, register, title, select , className}, index) => {
                    switch (fieldType) {
                        case "text":
                        case "email":
                        case "password":
                        case "submit":
                        case "number":
                            return <Input register={register} type={fieldType} title={title} key={`${register?.name}${index}`}  className={className}/>
                        case "select":
                            return <SelectOptions options={select?.options} settings={select?.settings as StateManagedSelect} title={title} className={className}/>

                    }
                })
            }
        </>
    )
}

export default Fields