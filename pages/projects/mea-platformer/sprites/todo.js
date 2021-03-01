import ProjectsPage from '../../../../components/projects-page'
import { Link, Grid, Text, Card } from 'theme-ui'
import ElementCards from '../../../../components/element-cards'

const cards = [
    {
        title: "Sprites",
        inProgress: ["Main character", "Enemy", "Obstacles"],
    },
    {
        title: "Tilemaps",
        inProgress:["Icy road"],
    },
    {
        title: "Background Art",
        inProgress:["Icy mountain", "MEA Campus"],
    },
]

export default function Page(){
    return(
        <ProjectsPage
            backButtonHref="/projects/mea-platformer"
            backButtonText="MEA Platformer"
            header="MEA Platformer - Pixel Art To Do"
            title="MEA Platformer - Pixel Art To Do"
        >
            <Text variant="lead">
                Send any ideas to <Link href="mailto:hackclubmea@gmail.com">hackclubmea@gmail.com!</Link>
            </Text>
            <ElementCards cards={cards}/>
        </ProjectsPage>
    )
}
