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

function ElementCard({ description, title, inProgress, done}){
    let titleColor = inProgress||!done ? 'blue' : 'red';
    return (
        <Card variant="interactive" sx={{ 
            // backgroundImage: t => t.util.gx('cyan', 'blue'),
        }}>
            <Text variant="headline" sx={{ color:titleColor }}>
                {title}
            </Text>
            {description && <Text variant="caption" sx={{ mb: 1 }}>
                {description}
            </Text>}
            {inProgress && <div>
                <Text variant="subheadline" sx={{ color: 'blue' }}>
                    In progress
                </Text>
                <ol>
                    {inProgress.map(element => {
                        const isString = typeof(element)==="string";
                        const item = isString ? element : element.item
                        return (<div>
                        {<Text variant="subheading">
                            <li>
                                {item}
                                <ul>
                                    {element.subitems && element.subitems.map(subitem => {
                                        return (<li>
                                            {subitem}
                                        </li>)
                                    })}
                                </ul>
                            </li>
                        </Text>}
                        </div>)
                    })}
                </ol>
            </div> }
            {done && <div>
                <Text variant="subheadline" sx={{ color: 'red'}}>
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