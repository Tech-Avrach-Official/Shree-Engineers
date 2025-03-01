import React from 'react'
import { BookMarked, DiscAlbum, Projector } from 'lucide-react'

const Info = () => {
  return (
    <div className='px-40 py-20'>
        <div className='grid grid-cols-2 gap-10'>
            <div>
                <h1 className='text-4xl font-bold'>Experience The New Adventure</h1>
                <p className='mt-5 text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus rerum, est accusantium ut possimus nostrum eaque voluptatum nemo laudantium necessitatibus blanditiis delectus repellat fuga incidunt veniam praesentium nobis deleniti eum enim sed saepe commodi. Inventore officiis recusandae eligendi modi iusto dolorem facilis possimus aut vero ratione optio quaerat quisquam similique amet consequuntur nisi minima, velit officia voluptatum dolore distinctio soluta autem. Dolore nisi explicabo velit!</p>
                <div className='mt-5 flex flex-col gap-5'>
                    <div className='flex items-center gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full'>
                            <BookMarked size={30} />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Discovry</h2>
                            <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full'>
                            <DiscAlbum size={30} />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Products</h2>
                            <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='bg-gray-300 p-2 rounded-full'>
                            <Projector size={30} />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Services</h2>
                            <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
              alt="Kelingking Beach" className='h-full w-full rounded-xl object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Info