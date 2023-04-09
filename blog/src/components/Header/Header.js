import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
export { H1 } from './Heading1'

const Outer = styled.header`
  background: ${props => props.theme.header.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const H1 = styled.h1`
  margin: 0px; 
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Section width={11 / 12}>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Section>
    <Section width={1 / 12}>
      <IconButton icon={<Search />} variant="contrast" />
    </Section>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default {Header}