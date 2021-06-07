import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const About = () => {

    const { user } = useContext(UserContext)


    return (
        <div className='container text-center mt-5'>
            <h1>About</h1>
            {
                !user ? <h2 className='text-danger'>Please Login</h2> : (
                    <div>
                        <p> Name:{user.data.first_name} {user.data.last_name}</p>
                        <p> Email:{user.data.email}</p>
                        <img src={user.data.avatar} alt={user.data.id}
                            width='150 px'
                            height='150px'
                        />
                    </div>
                )


            }
        </div>
    )
}

export default About
