module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'gbs5wc6eubhk',
        accessToken: 'c95a3a454fab0ad9d6f4a642f717d3d3305ae22430a9d232882f5cd4e53e2da0'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          }
        ]
      }
    },
    'gatsby-plugin-offline',
  ],
}
