const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getDynamicPages {
      branches: allContentfulBranch {
        nodes {
          slug
        }
      }
      cultural: allContentfulGroup(filter: { technical: { eq: false } }) {
        groups: nodes {
          slug
        }
      }
      technical: allContentfulGroup(filter: { technical: { eq: true } }) {
        groups: nodes {
          slug
        }
      }
    }
  `)
  result.data.branches.nodes.forEach(branch => {
    createPage({
      path: `/branches/${branch.slug}`,
      component: path.resolve(`src/templates/branch-template.js`),
      context: {
        slug: branch.slug,
      },
    })
  })
  result.data.cultural.groups.forEach(group => {
    createPage({
      path: `/co-curricular/cultural-groups/${group.slug}`,
      component: path.resolve(`src/templates/group-template.js`),
      context: {
        slug: group.slug,
      },
    })
  })
  result.data.technical.groups.forEach(group => {
    createPage({
      path: `/co-curricular/technical-groups/${group.slug}`,
      component: path.resolve(`src/templates/group-template.js`),
      context: {
        slug: group.slug,
      },
    })
  })
}
