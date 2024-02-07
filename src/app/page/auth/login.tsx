import { useForm } from "react-hook-form";
import Fields, { IFieldProps } from "../../components/fields";
import AuthLayout from "../../components/layouts/authLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Loading from "../../components/layouts/loading";
import { setLoading } from "../../store/slices/loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {

  const { register, handleSubmit } = useForm()
  const loading = useSelector((state: RootState) => state.LoadingReducer.loading)
  const userData = useSelector((state: RootState) => state.UserReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fieldInput: IFieldProps["fields"] = [
    { fieldType: "email", register: { ...register("email", { required: true }) }, title: "Enter your Email" },
    { fieldType: "password", register: { ...register("password", { required: true }) }, title: "Enter your Password" },
    { fieldType: "submit",  title: "Login"  }
  ]

  const submitForm = (data: any): void => {
    if (userData.email === data.email && userData.password === data.password) {
      dispatch(setLoading(true))
      setTimeout(() => {
        dispatch(setLoading(false))
        toast.success("You have successfully logged in")
        setTimeout(() => {
          navigate('/panel/dashboard')
        }, 3000)
      }, 2000)
    } else {
      toast.error("The email or password is incorrect")
    }
  }

  return (
    <AuthLayout title="Login Page" onSubmitForm={handleSubmit(submitForm)}>
      {loading && <Loading />}
      <Fields fields={fieldInput} />
    </AuthLayout>
  )
}