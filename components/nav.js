import { Flex, useColorMode, NavLink } from 'theme-ui';
import ColorSwitcher from '../components/color-switcher'

export default function Nav(){
    const [mode, setMode] = useColorMode();

    return (
        <Flex as='nav' sx={{ 
            position: 'fixed',
            padding: '15px',
            zIndex: '100',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: '100%'
        }}>
            <NavLink href="/" p={2}>
                Home
            </NavLink>
            <NavLink href="projects" p={2}>
                Projects
            </NavLink>
            {/* <ColorSwitcher /> */}
        </Flex>
    );
}