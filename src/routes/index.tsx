import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

//Home
const Home = lazy(() => import('../App'))

//Panel
const Panel = lazy(() => import('../app/page/panel'))
const Dashboard = lazy(() => import("../app/page/panel/dashboard"))
const Products = lazy(() => import("../app/page/panel/products"))
const User = lazy(() => import("../app/page/panel/users"))
const Profile = lazy(() => import("../app/page/panel/profile"))

//Auth
const Register = lazy(() => import('../app/page/auth/register'))
const Login = lazy(() => import('../app/page/auth/login'))

const AppRoutes: React.FC = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/panel/*" element={<Panel /> } >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="users" element={<User />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

               
            </Routes>
        </>
    )
}

export default AppRoutes