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
                    <Heading as="h1" variant="headline" sx={{ mb: 4 }}>
                        Current projects
                    </Heading>
                        <ProjectCard slug="mea-platformer" name="MEA Platformer Game" description="description" section="current-projects"/>
                    <Heading as="h1" variant="headline" sx={{ mb: 4 }}>
                        Past projects
                    </Heading>
                        <ProjectCard slug="dungeon-crawler" name="Dungeon Crawler" description="A workshop from Hack Club"/>
                        <br/>
                        <ProjectCard slug="cyoa" name="Choose your own adventure game" description="A text based python game"/> 
                </Container>
            </Box>
        </div>
    )
}