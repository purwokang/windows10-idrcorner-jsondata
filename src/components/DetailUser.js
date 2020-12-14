import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DetailUser extends Component {

    state = {
        user: null,
        loading: true
    }

    componentDidMount() {
        const id = this.props.match.params.id_user
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Ambil data gagal')
                }
            })
            .then(data => this.setState({
                user: data, loading: false
            }))
    }

    render() {
        const { loading, user } = this.state

        if (loading) {
            return <p>Loading...</p>
        }
        return (
            <div className='container'>
                <h1>Detail User</h1>
                <div className="card container">
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.street}{user.address.zipcode}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
                <Link className='nav-link' exact to='/'>Kembali ke Daftar User</Link>
            </div>
        )
    }
}

export default DetailUser
