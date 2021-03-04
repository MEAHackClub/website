import ElementCards from '../../../components/element-cards'
import ProjectsPage from '../../../components/projects-page'
import { Grid } from 'theme-ui'

const cards = [
    {
        title: "Camera Follow",
        inProgress: ["Basic camera follow", "Parallax scrolling"]
    },
    {
        title: "Make more levels",
    },
    {
        title: "Add projectile to player",
    },
    
]

export default function Page(){
    return(
        <ProjectsPage
            backButtonHref="/projects/mea-platformer"
            backButtonText="MEA Platformer"
            header="MEA Platformer - To Do"
            title="MEA Platformer - To Do"
        >
            <ElementCards cards={cards} />
        </ProjectsPage>
    )
}