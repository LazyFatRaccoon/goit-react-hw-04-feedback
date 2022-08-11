import nextId from "react-id-generator";
import {Button, Div} from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options)
   const optionsArr = Object.keys(options).map((key) => (key));
   console.log(optionsArr)
  return <Div>
  {optionsArr.map( option => {
      return <Button type="button" key={nextId()} onClick={() => {onLeaveFeedback(option)}}>
          {option}
        </Button>
    })}
    </Div>
};

FeedbackOptions.propTypes = {
    options: PropTypes.exact({
        Good: PropTypes.number.isRequired,
        Neutral: PropTypes.number.isRequired,
        Bad: PropTypes.number.isRequired
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
