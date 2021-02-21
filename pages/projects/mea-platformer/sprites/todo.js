import ProjectsPage from '../../../../components/projects-page'
import ProjectCard from '../../../../components/project-card'
// import Content from './todo-sprites.mdx'

export default function Page(){
    return(
        <ProjectsPage
            backButtonHref="/projects/mea-platformer"
            backButtonText="MEA Platformer"
            header="MEA Platformer - Pixel Art To Do"
            title="MEA Platformer - Pixel Art To Do"
        >
            <ul sx={{
                display: 'flex', flexDirection: "row" 
            }}>
                <li><ProjectCard>
                    Sprites

                    <ol>
                        <li> Main Character (AJ) </li>
                        <li> Enemy </li>
                        <li> Obstacles (AJ) </li>
                    </ol>
                </ProjectCard></li>

                <li><ProjectCard>
                    Tilemaps

                    <ol>
                        <li> Icy road (Blake)</li>
                    </ol>
                </ProjectCard></li>

                <li><ProjectCard>
                    Background art

                    <ol>
                        <li> Icy mountain (Kaeleb) </li>
                        <li> MEA Campus </li>
                    </ol>
                </ProjectCard></li>
            </ul>
        </ProjectsPage>
    )
}
