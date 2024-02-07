import { useForm } from "react-hook-form"
import Fields, { IFieldProps } from "../../components/fields"
import AuthLayout from "../../components/layouts/authLayout"
import { useDispatch, useSelector } from "react-redux"
import { registerUser, IUserDataType } from '../../store/slices/user'
import { setLoading } from "../../store/slices/loading"
import { RootState } from "../../store"
import Loading from "../../components/layouts/loading"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Register() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const loading = useSelector((state: RootState) => state.LoadingReducer.loading)
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
            age: ""
        }
    })

    const fieldInput: IFieldProps["fields"] = [
        { fieldType: "email", register: { ...register("email", { required: true }) }, title: "Enter your Email" },
        { fieldType: "password", register: { ...register("password", { required: true }) }, title: "Enter your Password" },
        { fieldType: "number", register: { ...register("age", { required: true, max: 50, min: 18 }) }, title: "Enter your Age" },
        { fieldType: "submit", title: "subscribe" }
    ]

    const submitForm = (data: IUserDataType["user"]): void => {
        dispatch(registerUser(data))
        dispatch(setLoading(true))
        setTimeout(() => {
            toast.success("You have successfully registered")
            dispatch(setLoading(false))
            setTimeout(() => {
                navigate("/login")
            }, 3000)
        }, 2000)
    }

    return (
        <AuthLayout title="Register Page" onSubmitForm={handleSubmit(submitForm)}>
            {loading && <Loading />}
            {<Fields fields={fieldInput} />}
        </AuthLayout>
    )
}


export default Register