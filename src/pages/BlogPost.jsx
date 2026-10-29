import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostBySlug } from '../data/posts.js'
import { profile } from '../data/profile.js'
import { PostMeta } from './Blog.jsx'
import NotFound from './NotFound.jsx'

function Block({ block }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>
  if (block.type === 'list')
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  return <p>{block.text}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} | ${profile.name}`
    return () => {
      document.title = `${profile.name} | ${profile.title}`
    }
  }, [post])

  if (!post) return <NotFound />

  return (
    <article className="section page-top">
      <div className="container narrow">
        <Link to="/blog" className="back-link">
          <span aria-hidden="true">←</span> All posts
        </Link>
        <header className="post-header">
          <PostMeta post={post} />
          <h1 className="page-title">{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
        </header>
        <div className="prose">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </div>
    </article>
  )
}
