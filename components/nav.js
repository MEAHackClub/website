import { Flex, NavLink } from 'theme-ui';
import ColorSwitcher from '../components/color-switcher'

export default function Nav(){
    return (
        <Flex as='nav' sx={{ 
            position: 'fixed',
            padding: '10px',
            zIndex: '100',
            backgroundColor: 'black',
            width: '100%'
        }}>
            <NavLink href="/" p={2}>
                Home
            </NavLink>
            <NavLink href="projects" p={2}>
                Projects
            </NavLink>
            <ColorSwitcher />
        </Flex>
    );
}