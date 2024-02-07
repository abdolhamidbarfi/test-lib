import { useState } from "react"
import PanelLayout from "../../components/layouts/panel"
import { Outlet } from "react-router-dom"



const Panel: React.FC = () => {

    const [open, setOpen] = useState(false)

    return (
        <PanelLayout >
            <Outlet />
        </PanelLayout>
    )
}

export default Panel