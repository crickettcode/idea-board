import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Dogshit = styled.img`
`
const YourMom = styled.div`
display:flex;
padding:2.5rem;
justify-content:center;
margin:auto;


button {


font-family:monospace;
color:whitesmoke;   
border:solid;
border-width: 10px; 
border-color:#801515;
background:#D46A6A;
display:flex;
flex-direction: row;
justify-content:space-around;
padding: 1.5rem;
border-radius: 10px; 


}


input {
    display:flex;
    justify-content:space-around;
    background-color:#801515;
    font-family:monospace;
    color:whitesmoke;
    border-width:10px;
    padding:1.5rem;
    border-color: #D46A6A;
    


}

textarea {
    background:#FFFDD2;
    border-radius:10px;
    display:flex;
    justify-content:center;
    font-family:monospace;
    color:#801515;
    font-size:12px;
    padding:1.8rem;
     


}

}
`

const YourDad = styled.div`



h1 { 
    
 font-family:monospace;
 color:#FFAAAA;
 font-size:45px; 
 display:flex;
 justify-content:center;


}


}`






class IdeaPage extends Component {
    state = {
        user: {
            userName: 'Bob'
        },
        ideas: [{
            id: 1,
            title: 'hello',
            description: 'world'
        }, {
            id: 2,
            title: 'hola',
            description: 'mundo'
        }, {
            id: 3,
            title: 'goodnight',
            description: 'moon'
        }, {
            id: 4,
            title: 'greetings',
            description: 'earthlings'
        }]
    }

    componentDidMount() {
        const userId = this.props.match.params.userId
        console.log(userId)
        axios.get(`/api/users/${userId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    user: response.data,
                    ideas: response.data.ideas
                })
            })
    }

    render() {
        const ideas = this.state.ideas.map((idea, i) => {
            return (
                <YourMom key={i}>
                    <input type="text" name="title" value={idea.title} onChange={this.handleChange} />
                    <textarea name="description" value={idea.description} onChange={this.handleChange} />
                    <button>Delete Idea</button>

                </YourMom>
            )
        })

        return (
            <div>
                <YourDad>
                    <h1>{this.state.user.userName}'s Idea Board</h1>
                    <button>New Idea</button>
                </YourDad>
                <div>

                    {ideas}
                </div>
            </div>
        )
    }
}


export default IdeaPage