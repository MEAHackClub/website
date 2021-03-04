import { Grid, Card, Text } from 'theme-ui' 

export default function ElementCards({ cards }){
    return (
        <Grid width="33%" columns={[1, 1]}>
            {cards && cards.map(card => {
                return <ElementCard {...card} />
            })}
        </Grid>
    )
}

function ElementCard({ title, inProgress, done}){
    return (
        <Card variant="interactive" sx={{ 
            // backgroundImage: t => t.util.gx('cyan', 'blue'),
        }}>
            <Text variant="headline" sx={{ color:'blue' }}>
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