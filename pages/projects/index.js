import { Card, Text,Heading, Button, Link, Container, Box, IconButton, NavLink } from 'theme-ui';
import { Helmet } from 'react-helmet';
import BackButton from '../../components/back-button'
import Header from '../../components/header'

const ProjectCard = ({ slug, name, description, img, section }) => (
  <Link sx={{ textDecoration: 'none' }} href={`/projects/${slug}`} passHref>
    <Card
      as="a"
      variant="interactive"
      sx={{
        color: 'text',
        textDecoration: 'none',
        p: [0, 0],
        lineHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ p: 3, lineHeight: 'body' }}>
        <Heading as="h3" sx={{ my: 1 }}>
          {name}
        </Heading>
        <Text variant="caption">{description}</Text>
      </Box>
      {['starters', 'web', 'bounties', 'hack_island'].includes(section) && (
        <Box
          sx={{
            width: '100%',
            mt: 'auto',
            ...(img && { height: 0, paddingBottom: '50%' }),
            '> img': { objectFit: 'cover', objectPosition: 'center' },
            '@media print': { display: 'none' }
          }}
        >
          {/* currently Next Images only support known domains, so we can’t use them for bounties/etc with the `img` in metadata */}
          {img ? (
            <Image alt={`${name} demo`} src={img} loading="lazy" />
          ) : (
            <NextImage
              alt={`${name} demo`}
              src={`/content/workshops/${slug}/img/demo.png`}
              width={512}
              height={256}
            />
          )}
        </Box>
      )}
    </Card>
  </Link>
)

const currentProjects = [
    {
        name: "MEA Platformer Game", 
        description: "An MEA-themed platformer game made in pygame!",
        slug: "mea-platformer"
    }
]
const pastProjects = [
    {
        name: "Choose your own adventure game",
        description: "A text-based Python game",
        slug: "cyoa",
    },
    {
        name: "Dungeon Crawler", 
        description: "A modified workshop from Hack Club",
        slug: "dungeon-crawler",
    }
]

export default function Page(){
    return(
        <div>
            <Header>
                Projects | MEA Hack Club 
            </Header>
            <BackButton href="/">
                Home
            </BackButton>
            <Box sx={{ mt: '4', }}>
                <Container>
                    <Heading as="h1" variant="headline" sx={{ textAlign: 'center', mb: 4 }}>
                        Current projects
                    </Heading>
                    {currentProjects && currentProjects.map(project => {
                        return ( <div>
                            <ProjectCard {...project} />
                            <br/>
                        </div>)
                    })}
                    <Heading as="h1" variant="headline" sx={{ textAlign: 'center', mb: 4 }}>
                        Past projects
                    </Heading>
                    {pastProjects && pastProjects.map(project => {
                        return ( <div>
                            <ProjectCard {...project} />
                            <br/>
                        </div>)
                    })}
                </Container>
            </Box>
        </div>
    )
}