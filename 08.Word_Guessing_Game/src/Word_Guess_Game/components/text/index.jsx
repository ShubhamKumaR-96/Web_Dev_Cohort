import './style.css';

const StyleType={
    ANSWER_HINT:"answer",
    QUESTION_TITLE:"question",
    SCORE:"score"
}

function Text(props){
    const {text="",type=""}=props || {};

    let className="";

    className +=`text_${type}`
    return(
        <div>
            <span className={className}>{text}</span>
        </div>
    )
}
Text.StyleType=StyleType;

export default Text;