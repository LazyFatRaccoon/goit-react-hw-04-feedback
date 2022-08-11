import {Div, P} from './Section.styled'
import PropTypes from 'prop-types'

const Section = ({title, children}) => {
    return <Div>
        {title ? <P>{title}</P> : ''}
        {children}
    </Div>
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Section