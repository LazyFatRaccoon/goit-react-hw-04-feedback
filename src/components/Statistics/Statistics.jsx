import nextId from "react-id-generator";
import {P} from "./Statistics.styled"
import PropTypes from 'prop-types'

const Statistics = ({data}) => {
    
    const dataArr = Object.entries(data)
    const total = Object.values(data).reduce((count, acc) => count + acc,0)
    const posFeedbacks = Math.floor(data.Good / total * 100)
    
    if (total===0) return <P>No feedback given</P>
    return <> 
    {dataArr.map(line=>{return <P key={nextId()}>{line[0]}: {line[1]}</P>})}
    <P>Total: {total}</P>
    <P>Positive feedback: {posFeedbacks}%</P>
    </>
}

Statistics.propTypes = {
    data: PropTypes.exact({
        Good: PropTypes.number.isRequired,
        Neutral: PropTypes.number.isRequired,
        Bad: PropTypes.number.isRequired
    })
}

export default Statistics