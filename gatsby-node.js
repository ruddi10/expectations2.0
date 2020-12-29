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
      freshman: allContentfulExperience(filter: { archive: { eq: false } }) {
        experiences: nodes {
          slug
        }
      }
      alumni: allContentfulExperience(filter: { archive: { eq: true } }) {
        experiences: nodes {
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
  result.data.freshman.experiences.forEach(experience => {
    createPage({
      path: `/experiences/freshman/${experience.slug}`,
      component: path.resolve(`src/templates/experience-template.js`),
      context: {
        slug: experience.slug,
        myurl: `/experiences/freshman/`,
      },
    })
  })
  result.data.alumni.experiences.forEach(experience => {
    createPage({
      path: `/experiences/alumni/${experience.slug}`,
      component: path.resolve(`src/templates/experience-template.js`),
      context: {
        slug: experience.slug,
        myurl: "/experiences/alumni/",
      },
    })
  })
}
