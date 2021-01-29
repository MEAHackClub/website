import ColorSwitcher from '../components/color-switcher'
import { Flex, NavLink } from 'theme-ui';

export default function Nav(){
    return (
        <Flex as='nav' sx={{ padding: '10px'}}>
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