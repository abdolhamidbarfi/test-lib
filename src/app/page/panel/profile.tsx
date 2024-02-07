import { useSelector } from "react-redux"
import { RootState } from "../../store"
import Diagonal from "../../components/diagonal"
import { useState } from "react"
import Fields, { IFieldProps } from "../../components/fields"
import { useForm } from "react-hook-form"
import FormLayout from "../../components/layouts/formLayout"



const Products = () => {
    const userInfo = useSelector((state: RootState) => state.UserReducer)
    const { register, handleSubmit } = useForm()
    const userData = useSelector((state: RootState) => state.UserReducer.user)

    const nameList = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]


    const fieldInput: IFieldProps["fields"] = [
        { fieldType: "text", register: { ...register("firstname", { required: true }) }, title: "Enter your Firstname" },
        { fieldType: "text", register: { ...register("lastname", { required: true }) }, title: "Enter your Lastname" },
        { fieldType: "text", register: { ...register("username", { required: true }) }, title: "Enter your Username" },
        { fieldType: "text", register: { ...register("mobile", { required: true }) }, title: "Enter your Phone Number" },
        { fieldType: "select", select: { options: nameList }, title: "Select Your Name" },
        { fieldType: "text", register: { ...register("counter", { required: true }) }, title: "Enter your Country Name" },
        { fieldType: "email", register: { ...register("email", { required: true, value: userData.email }) }, title: "Enter your Email" },
        { fieldType: "number", register: { ...register("age", { required: true, max: 50, min: 18, value: userData.age }) }, title: "Enter your Age" },
       
    ]

    const submitForm = (data: any) => {
        console.log(data)
    }

    return (
        <div className="space-y-3 container mx-auto">
            <FormLayout onSubmitForm={handleSubmit(submitForm)} buttonTitle="Save">
                <div className="grid grid-cols-3 gap-5">
                    <Fields fields={fieldInput} />
                </div>
            </FormLayout>
        </div>
    )
}

export default Products