import { NavLink, Button } from 'theme-ui';

export default function SignupButton(){
    return (
        <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLScK8Wh1Et-XXOkDUrnJwCgVc0x65wlu7mDzVhKJIFS9zOoqMw/viewform">
            <Button sx={{
                position: 'absolute',
                top: 2,
                right: 5,
                p: [2, 3],
            }}>
                Sign Up
            </Button>
        </NavLink>
    );
}