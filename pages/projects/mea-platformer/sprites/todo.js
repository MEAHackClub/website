import ProjectsPage from '../../../../components/projects-page'
import { NavLink, Grid, Text, Card } from 'theme-ui'
// import Content from './todo-sprites.mdx'

export default function Page(){
    return(
        <ProjectsPage
            backButtonHref="/projects/mea-platformer"
            backButtonText="MEA Platformer"
            header="MEA Platformer - Pixel Art To Do"
            title="MEA Platformer - Pixel Art To Do"
        >
            <Text variant="lead">
                Send any ideas to <NavLink href="mailto:hackclubmea@gmail.com">hackclubmea@gmail.com!</NavLink>
            </Text>
            <Grid width="50%" columns="2">
                <ElementCard
                    title="Sprites"
                    inProgress={["Main character (AJ)", "Enemy", "Obstacles (AJ)"]}
                />
                <ElementCard
                    title="Tilemaps"
                    inProgress={["Icy road (Blake)"]}
                />
                <ElementCard
                    title="Background art"
                    inProgress={["Icy mountain (Kaeleb)", "MEA Campus"]}
                />
            </Grid>
        </ProjectsPage>
    )
}

function ElementCard({ title, inProgress, done}){
    return (
        <Card sx={{ 
            backgroundImage: t => t.util.gx('cyan', 'blue'),
            width: '50%'
        }}>
            <Text variant="headline">
                {title}
            </Text>
            {inProgress && <div>
                <Text variant="subheadline">
                    In progress
                </Text>
                <ol>
                    {inProgress.map(element => {
                        return <Text variant="subheading">
                            <li>
                                {element}
                            </li>
                        </Text>
                    })}
                </ol>
            </div> }
            {done && <div>
                <Text variant="subheadline">
                    Done
                </Text>
                <ol>
                    {done.map(element => {
                        return <Text variant="subheading">
                            <li>
                                {element}
                            </li>
                        </Text>
                    })}
                </ol>
            </div> }
        </Card>
    )
}
