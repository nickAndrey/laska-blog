import React from "react"
import {Link, graphql} from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    {data.allStrapiArticle.edges.map(item => (
      <div key={item.node.id} style={{
        display: `grid`,
        gridTemplateColumns: `1fr 2fr`,
        gridGap: `15px`,
        marginBottom: `40px`
      }}>
        <h4 style={{
          gridColumn: `1/-1`,
          margin: `0`
        }}><Link to={`/${item.node.id}`}>{item.node.title}</Link></h4>
        <Link to={`/${item.node.id}`}>
          <Img fluid={item.node.image.childImageSharp.fluid}/>
        </Link>
        <p>{item.node.description} <Link to={`/${item.node.id}`}>Continue reading</Link></p>
      </div>
    ))}
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          author {
            id
            username
          }
          content
          id
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`;
