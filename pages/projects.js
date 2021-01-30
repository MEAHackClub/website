import { IconButton, Image } from 'theme-ui';

export default function Page(){
    return(
        <div>
            <IconButton>
                <Image
                    src="images/left-arrow.svg"
                    sx={{
                        color:"currentcolor",
                    }}
                />
            </IconButton>
        </div>
    )
}