
import Login from '../components/Login'

function Loginpage() {
  

    return (
        <>
            <section className='min-h-screen flex justify-center items-center'>
                <div className='shadow-2xl rounded-xl h-150 w-200 '>

                    <Login isTrue={true}/>
                    
                </div>

            </section>

        </>
    )
}

export default Loginpage