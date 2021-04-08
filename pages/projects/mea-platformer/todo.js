import ElementCards from '../../../components/element-cards'
import ProjectsPage from '../../../components/projects-page'
import { Grid } from 'theme-ui'

const cards = [
  {
    title: 'Make checkpoints for health regeneration',
    description:
      'Create checkpoints, where the player can approach to regain health, replacing the current health regeneration system.',
    inProgress: ['Heal player only once (healing item)'],
    done: [
      'Delete player healing every 5 seconds in main.py',
      'Add checkpoint as a block (map.py)',
      'Delete collision detection from move() function in helpers.py',
      'In the player.move() function, heal player if checkpoint collision is detected'
    ]
  },
  {
    title: 'Enemy animations',
    inProgress: [
      'Add running pngs into sprites.py (hint: create an array of all the running pngs)',
      'Give enemy the spriteIndex property',
      'In main.py, where the enemy object is created, change the references to the enemy sprite to yeti_standing',
      'In the game loop, blit the enemy running sprite onto the screen, using the spriteIndex to access the right sprite',
      'Change animation every 500 milliseconds'
    ],
    done: ['Add enemy sprite pngs into img folder']
  },
  {
    title: 'Make spawn blocks for enemy, player and checkpoints.',
    description:
      'When a goal is reached, clear all enemies, checkpoints, and players. An enemy spawns on these blocks at the loading of each map.',
    inProgress: []
  },
  {
    title: 'Have enemy damage through ball projectile collision',
    inProgress: [
      'Give the projectile a hitbox (rect), (hint: pygame.draw.circle returns a rect)',
      'Give enemy health properties (copy from player)',
      'Copy heal and do damage functions from player',
      'Give projectile a function that checks for collision on enemy (rect.colliderect)',
      'Damage enemy health on collision'
    ]
  },
  {
    title: 'Player death and menu system',
    inProgress: []
  },
  {
    title: 'Camera Follow',
    inProgress: ['Basic camera follow', 'Parallax scrolling']
  },
  {
    title: 'Powerups',
    inProgress: []
  },
  {
    title: 'Make more levels',
    inProgress: []
  },
  {
    title: 'Add ball projectile',
    description:
      'Create a ball-shaped projectile fired from the player. If the player is going right, fire right, and the same with player moving left.',
    done: [
      'Make new projectile object (class)',
      {
        item:
          'Add properties to object. Have each variable be passed in from the constructor (init() function)',
        subitems: [
          'x position',
          'y position',
          'radius',
          'color',
          'direction (-1 = left, 1 = right)',
          "velocity (speed. Have this be 8 times the direction, so don't add this in init)"
        ]
      },
      {
        item: 'draw function',
        subitems: [
          'pass in the display as a parameter',
          'pygame.draw.circle function'
        ]
      },
      { item: 'move function', subitems: ['add velocity to x position'] },
      {
        item: 'add properties to player',
        subitems: ['add projectiles property (initialize to empty array)']
      },
      {
        item: 'add move_projectiles function to player',
        subitems: [
          'projectile.move() on each of the projectiles',
          'projectile.draw() each of projectiles (make sure to pass in display as a parameter)',
          'if projectile x position is greater than 400 or less than 0, erase it from array (out of screen)'
        ]
      },
      {
        item: 'add to main game loop',
        subitems: [
          'check when keyboard is pressed using KEYDOWN and K_SPACE',
          'add a projectile to player.projectiles on spacebar press',
          'run player.move_projectiles in game loop to move projectiles every loop'
        ]
      }
    ]
  },
  {
    title: 'Fix player movement bug',
    done: ['separated direction variable to moving left and right']
  },
  {
    title: 'Add health to player',
    done: [
      'damage function that decreases player health',
      'heal function that increases player health',
      'function that draws the health bar (hint: try using pygame.draw.rect :))',
      'enemy doing damage to player on collision (hint: check moveRoutine() in enemy.py)',
      'function that heals the player a little bit every 2 seconds (hint: pygame.time.get_ticks() for ms passed)',
      'current health (property)',
      'max health (property)',
      'health bar length (property)'
    ]
  },
  {
    title: 'Enemy movement',
    description:
      'Have enemy move in a Mario Goomba-style movement. The Goomba travels in one direction, only changing directions when hitting a wall or object.',
    done: [
      'In moveRoutine in enemy.py, have the enemy move either left or right based on the direction variable.',
      {
        item: 'Switch directions on left/right collision',
        subitems: [
          'Collision detection is given by the move() function. Find it in the self.move() function at the bottom of file.',
          "Check for right collision with collisions['right'], etc"
        ]
      }
    ]
  }
]

export default function Page() {
  return (
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
