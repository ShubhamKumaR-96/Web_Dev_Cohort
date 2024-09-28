import Tag from '../components/tag'
import Text from '../components/text'
import './style.css'

function ScoreBoard(){
    return (
        <div>
            <Tag label="Score" />
            <Text text="23" type={Text.StyleType.SCORE} />
        </div>
    )
}

export default ScoreBoard;