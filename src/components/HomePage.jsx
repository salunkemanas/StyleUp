import Card from './Card'

const HomePage = () => {

    return (
        <div>
            <div className="grid grid-cols-10 gap-4">
                <div className='col-start-1 col-span-10 px-5 md:col-start-2 md:col-span-8 '>
                    <h1 className='my-6 text-4xl flex justify-center'>Welcome to Style-Up</h1>
                    <h1 className='my-6 text-4xl flex justify-center'>Book your appointments now</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='col-span-3'><Card /></div>
                    </div>

                </div>
            </div>

            <footer className="bg-black text-white py-8 mt-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <div className="text-center md:text-left mb-4 md:mb-0 pl-4">
                        <div className="text-3xl font-bold pb-12">StyleUp</div>
                        <div>500 Terry Francine Street</div>
                        <div>San Francisco, CA 94158</div>
                        <div>123-456-7890</div>
                        <div>info@mysite.com</div>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0 ">
                        <div className="text-center md:text-left">&copy; 2024 StyleUp. All rights reserved.</div>
                    </div>
                    <div className="flex flex-col items-center pr-4">
                        <div className="text-center md:text-left pb-6">Follow us on:</div>
                        <div className="flex flex-col text-center mt-2">
                            <a href="#" className="m-3 hover:text-yellow-200">Twitter</a>
                            <a href="#" className="m-3 hover:text-yellow-200">Facebook</a>
                            <a href="#" className="m-3 hover:text-yellow-200">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default HomePage