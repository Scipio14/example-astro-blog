import rss from '@astrojs/rss'

import {formatBlogPosts} from '../js/utils'

const postImportResults = import.meta.glob('./blog/**/*.md',{eager:true});
const posts = formatBlogPosts(Object.values(postImportResults));

export const get = ()=>rss({
  stylesheet:'/rss/styles.xsl',
  title:"My Astro Blog",
  description:"An attempt to build a Blog using Astro.build",
  site:import.meta.env.SITE,
  items:posts.map((post)=>({
    link:post.url,
    title:post.frontmatter.title,
    pubDate:post.frontmatter.date,
    description:post.frontmatter.description,
    customData:`
      <author>${post.frontmatter.author}</author>
    `
  }))
})