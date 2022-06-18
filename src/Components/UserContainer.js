import React from 'react'
import { getUsersByAPI } from '../Services/UserService'
import User from './User'

class UserContainer extends React.Component {
    constructor (props){
        super(props)//pasando las props a reactComponent

        this.state = {//state es un método heredado de reactComponent
            users: [],//arreglo de usuarios
            isFetch: true,//para saber si
        }
    }//fin del constructor

    //llamamos a la API una vez que se monte el componente
      async componentDidMount () {
        const responseJson = await getUsersByAPI()
        this.setState({ users: responseJson.result, isFetch: false })//cambiamos el estado del arreglo users    
      }//fin de componentDidMount

    render (){
        const {isFetch, users} = this.state//destructuracion ES6
        return(
            <>
            {
                isFetch && 'Cargando...'
            }
       
                <section className='users-container'>
                    {
                        users.map((user) => <User
                        id={user.id}
                        title={user.title}
                        body={user.body}/>)
                    }
                </section>
            </>
        )//fin del return
    }//fin de render
}//fin de UserContainer
export default UserContainer