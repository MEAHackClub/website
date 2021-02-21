import { useRef } from 'react'
import ProjectsPage from '../../../components/projects-page'
import Content from './index.mdx'

export default function Page(){
    const ref = useRef(null) 
    const executeScroll = () => ref.current.scrollIntoView()

    return(
        <ProjectsPage
            header="MEA Platformer"
            title="MEA Platformer Project"
        >
        <Content/>
        </ProjectsPage>
    )
}