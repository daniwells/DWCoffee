import logo from '../images/logo.png'

function Footer(){
    return (
        <footer className={'bg-customBlack py-14'}>
            <header className={'bg-customYellowLight p-3 flex px-10 justify-center items-center'}> 
                <section className={'w-1/4'}><img src={logo} alt="logo" className={'w-14 h-14'} /></section>
                <h1 className={'w-3/4 font-archivoBlack  text-lg'}>More information</h1>
            </header>

            <section className={'p-10 flex flex-col items-center'} >
                <section className='flex flex-col space-y-5 justify-center items-center'>
                    <h2 className={'text-white font-archivoBlack'}>CONTACT</h2>
                    <p className={'text-justify text-white opacity-50 '}>
                        Email: daniel@gmail.com <br/>
                        Phone: 777.777.7777 <br/>
                        Instagram: @daniel.lima
                    </p>
                </section>
                <div className={' bg-white w-4/5 h-0.5 my-10 opacity-50'}></div>
                <section className='flex flex-col space-y-5 justify-center items-center'>
                    <h2 className={'text-white font-archivoBlack'}>NEWS</h2>
                    <p className={'text-justify text-white opacity-50 '}>Subscribe to receive our news!</p>
                </section>
                <div className={' bg-white w-4/5 h-0.5 my-10 opacity-50'}></div>
                <section className='flex flex-col space-y-5 justify-center items-center'>
                    <h2 className={'text-white font-archivoBlack'}>CREDITS</h2>
                    <p className={'text-justify text-white opacity-50 '}>Daniel Lima</p>
                </section>
            </section>
        </footer>
    )
}

export default Footer