import { NavLink, Button } from 'theme-ui';

export default function SignupButton(){
    return (
        <NavLink href="https://docs.google.com/forms/u/6/d/15uQDJ-XdGz4h922Cvwip28uJf4SfJJs49YB7AiGMDLw/edit?usp=forms_home&ths=true">
            <Button sx={{
                position: 'absolute',
                top: 2,
                right: 5,
                p: 3,
            }}>
                Sign Up
            </Button>
        </NavLink>
    );
}