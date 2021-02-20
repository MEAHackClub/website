import { Card, NavLink } from 'theme-ui'

export default function ProjectCard({ href, children}){
    return(
        <NavLink href={href}>
            <Card sx={{ 
                backgroundImage: t => t.util.gx('cyan', 'blue'),
                ':hover':{ backgroundImage:'none', bg:'black'} 
            }}>
                {children}
            </Card>
        </NavLink>
    )
}
