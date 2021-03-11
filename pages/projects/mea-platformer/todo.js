import ElementCards from '../../../components/element-cards'
import ProjectsPage from '../../../components/projects-page'
import { Grid } from 'theme-ui'

const cards = [
    {
        title: "Add ball projectile",
        description: "Create a ball-shaped projectile fired from the player. If the player is going right, fire right, and the same with player moving left.",
        inProgress: [
            "Make new projectile object (class)",
            {item: "Add properties to object. Have each variable be passed in from the constructor (init() function)", subitems: [
                "x position",
                "y position",
                "radius",
                "color",
                "direction (-1 = left, 1 = right)",
                "velocity (speed. Have this be 8 times the direction, so don't add this in init)",
            ]}, 
            {item: "draw function", subitems: [
                "pass in the display as a parameter",
                "pygame.draw.circle function",
            ]},
            {item: "move function", subitems: [
                "add velocity to x position",
            ]},
            {item: "add properties to player", subitems: [
                "add projectiles property (initialize to empty array)",
            ]},
            {item: "add move_projectiles function to player", subitems: [
                "projectile.move() on each of the projectiles",
                "projectile.draw() each of projectiles (make sure to pass in display as a parameter)",
                "if projectile x position is greater than 400 or less than 0, erase it from array (out of screen)",
            ]},
            {item: "add to main game loop", subitems: [
                "check when keyboard is pressed using KEYDOWN and K_SPACE",
                "add a projectile to player.projectiles on spacebar press",
                "run player.move_projectiles in game loop to move projectiles every loop",
            ]},
        ],
    },
    {
        title: "Camera Follow",
        inProgress: [
            "Basic camera follow", 
            "Parallax scrolling"
        ],
    },
    {
        title: "Make more levels",
    },
    {
        title: "Add projectile to player",
    },
    {
        title: "Enemy movement",
        inProgress: [
            "Make movement more customizable",
            "Follow the player like zombie",
        ]
    },
    {
        title: "Fix player movement bug",
        done: ["separated direction variable to moving left and right"],
    },
    {
        title: "Add health to player",
        done: [
            "damage function that decreases player health",
            "heal function that increases player health",
            "function that draws the health bar (hint: try using pygame.draw.rect :))",
            "enemy doing damage to player on collision (hint: check moveRoutine() in enemy.py)",
            "function that heals the player a little bit every 2 seconds (hint: pygame.time.get_ticks() for ms passed)",
            "current health (property)", 
            "max health (property)", 
            "health bar length (property)",
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