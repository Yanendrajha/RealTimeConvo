import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import JoinCreateChat from "../component/JoinCreateChat.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/JoinCreateChat">
                <JoinCreateChat/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews