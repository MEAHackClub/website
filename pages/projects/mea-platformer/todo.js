import ElementCards from '../../../components/element-cards'
import ProjectsPage from '../../../components/projects-page'
import { Grid } from 'theme-ui'

const cards = [
    {
        title: "Add health to player",
        inProgress: [
            "current health (property)", 
            "max health (property)", 
            "health bar length (property)",
            "damage function that decreases player health",
            "heal function that increases player health",
            "function that draws the health bar (hint: try using pygame.draw.rect :))",
            "enemy doing damage to player on collision (hint: check moveRoutine() in enemy.py)",
            "function that heals the player a little bit every 2 seconds (hint: pygame.time.get_ticks() for ms passed)",
        ],
        done: [

        ]
    },
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
    {
        title: "Enemy movemeny",
        inProgress: [
            "Make movement more customizable",
        ]
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