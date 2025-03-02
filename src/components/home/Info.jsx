import React from 'react'
import { BookMarked, DiscAlbum, Projector } from 'lucide-react'

const Info = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
            <div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Experience The New Adventure</h1>
                <p className='mt-3 md:mt-5 text-sm sm:text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus rerum, est accusantium ut possimus nostrum eaque voluptatum nemo laudantium necessitatibus blanditiis delectus repellat fuga incidunt veniam praesentium nobis deleniti eum enim sed saepe commodi. Inventore officiis recusandae eligendi modi iusto dolorem facilis possimus aut vero ratione optio quaerat quisquam similique amet consequuntur nisi minima, velit officia voluptatum dolore distinctio soluta autem. Dolore nisi explicabo velit!</p>
                <div className='mt-4 md:mt-5 flex flex-col gap-4 md:gap-5'>
                    <div className='flex items-start sm:items-center gap-3 sm:gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full flex-shrink-0'>
                            <BookMarked size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h2 className='text-lg sm:text-xl font-bold'>Discovery</h2>
                            <p className='text-sm sm:text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex items-start sm:items-center gap-3 sm:gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full flex-shrink-0'>
                            <DiscAlbum size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h2 className='text-lg sm:text-xl font-bold'>Products</h2>
                            <p className='text-sm sm:text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex items-start sm:items-center gap-3 sm:gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full flex-shrink-0'>
                            <Projector size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h2 className='text-lg sm:text-xl font-bold'>Services</h2>
                            <p className='text-sm sm:text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 md:mt-0 h-64 sm:h-80 md:h-auto'>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="Adventure landscape" className='h-full w-full rounded-xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Info