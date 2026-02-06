import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            {/* HERO SECTION */}
            <section className="bg-light py-5">
                <div className="container text-center">
                    <h1 className="fw-bold mb-3">
                        Todo & Posts Explorer App
                    </h1>

                    <p className="text-muted fs-5 mb-4">
                        A React application to manage daily todos and explore posts
                        with favorite functionality.
                    </p>

                    <div className="d-flex justify-content-center gap-3">
                        <Link to="/todos" className="btn btn-success btn-lg">
                            Manage Todos
                        </Link>

                        <Link to="/posts" className="btn btn-primary btn-lg">
                            Explore Posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">
                        What You Can Do
                    </h2>

                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Todo Management</h5>
                                    <p className="card-text text-muted">
                                        Add new todos, mark them as completed,
                                        and search through your task list easily.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Explore Posts</h5>
                                    <p className="card-text text-muted">
                                        Browse posts fetched from API, search by title,
                                        and read full post details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Favorite Feature</h5>
                                    <p className="card-text text-muted">
                                        Mark posts as favorite from list or details page.
                                        Favorites are saved using localStorage.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-3">Tech Stack Used</h2>

                    <p className="mb-0">
                        React • React Router • Axios • Bootstrap • LocalStorage • Vercel
                    </p>
                </div>
            </section>
        </div>
    );
}
