import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListUser extends Component {

    state = {
        datauser: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Ambil data gagal')
                }
            })
            .then(
                data => this.setState({ datauser: data, loading: false })
            )
            .catch(error => this.state({ error: error, loading: true }))
    }


    render() {

        const { datauser, loading, error } = this.state

        if (error) {
            return <p>{error.message}</p>
        }

        if (loading) {
            return <p>Loading...</p>
        }

        const listuser = datauser.map(user => {
            return (
                <div key={user.id} className='alert alert-primary'>
                    <Link to={'/detailuser/' + user.id}>
                        <h3>{user.name}</h3>
                    </Link>
                    <p>Email: {user.email}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>DAFTAR USER</h1>
                {listuser}
            </div>
        )
    }
}

export default ListUser
