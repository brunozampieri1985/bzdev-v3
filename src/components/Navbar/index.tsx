import useScreenSize from "@hooks/useScreenSize"
import NavbarMobile from "./NavbarMobile"
import NavbarDesktop from "./NavbarDesktop"


const Navbar: React.FC = () => {
    const { width } = useScreenSize()

    if (width > 768) {
        return <NavbarDesktop />
    }
    return <NavbarMobile />
}

export default Navbar