import React from 'react'

const YoutubeFrom = () => {
    return (
        <div>
            <h1>Youtube From</h1>
            <form>
                <label htmlFor='name' >Name</label>
                <input type='text' name='name' id='name' />

                <label htmlFor='email' >Email</label>
                <input type='email' name='email' id='email' />

                <label htmlFor='channel' >Channel</label>
                <input type='text' name='channel' id='channel' />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeFrom
