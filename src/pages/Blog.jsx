import { Link } from 'react-router-dom'
import { formatDate, getSortedPosts, readingTime } from '../data/posts.js'

export function PostMeta({ post }) {
  return (
    <p className="post-meta">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true"> · </span>
      {readingTime(post)} min read
      {post.draft && <span className="draft-badge">DRAFT</span>}
    </p>
  )
}

export default function Blog() {
  const posts = getSortedPosts()

  return (
    <section className="section page-top" aria-labelledby="blog-title">
      <div className="container narrow">
        <p className="eyebrow eyebrow-dark">Notes on finance</p>
        <h1 id="blog-title" className="page-title">
          Blog
        </h1>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="post-card">
                <PostMeta post={post} />
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
