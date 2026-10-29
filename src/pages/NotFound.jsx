import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section page-top">
      <div className="container narrow">
        <h1 className="page-title">Page not found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}
