const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getBranches {
      branches: allContentfulBranch {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.branches.nodes.map(branch => {
    createPage({
      path: `/branches/${branch.slug}`,
      component: path.resolve(`src/templates/branch-template.js`),
      context: {
        slug: branch.slug,
      },
    })
  })
}
