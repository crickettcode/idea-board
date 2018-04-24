
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(err => {
                console.error(err)
            })
    }




    render() {
        return (


            < div key={i}>
            </div>
            <div>
                <Link to='/'>Return Home</Link>
            </div >
            <h1>Log-In</h1>
            <h3>Please Select an Existing User</h3>
                {
            this.state.users.map(user => {
                return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
            })
        }
            </div >
        )
    }
}

export default LogIn
