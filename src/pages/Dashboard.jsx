import AddPhotoForm from '../components/forms/AddPhotoForm'

const Dashboard = () => {
    return(
        <main className="container">
            <h1 className="main__title">Dashboard</h1>
            <section className="section">
                <AddPhotoForm />
            </section>
        </main>
    )
}

export default Dashboard 