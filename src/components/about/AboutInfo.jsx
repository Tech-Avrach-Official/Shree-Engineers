import React from 'react'

const AboutInfo = () => {
  return (
    <div className='py-8  sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-40'>
       <div className='bg-gray-100 p-10 rounded-2xl'>
       <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'><span className='text-yellow-500 font-bold'>About Us</span> Shree Engineers</h1>
       <p className='text-justify mt-5'>lLorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minus dolore! Minima nulla quia autem sapiente. Veritatis iure vero quos ducimus mollitia quia laudantium alias cum accusamus voluptates quis est numquam nihil harum modi quod beatae nam, commodi impedit. Assumenda corporis beatae incidunt modi. Omnis reiciendis vel molestias animi, nesciunt atque possimus commodi cupiditate modi quae doloribus distinctio nulla, iure neque quasi quidem nihil eum a quo nisi impedit! Modi veritatis in error, explicabo facilis ab quaerat, quisquam voluptates corrupti vero accusantium, odio voluptatibus id. Voluptas ducimus deserunt tenetur labore velit aliquid enim, veritatis minus vero vitae voluptates dolore eaque, libero amet, esse nam commodi iure. Deleniti, ipsum? Ducimus repudiandae id soluta reiciendis quod veritatis recusandae, voluptatem tenetur fugiat expedita, similique itaque. Consequuntur ipsa exercitationem magni corporis quia cupiditate sit quo, accusantium omnis dicta laudantium rem repellat sed. Corrupti sunt ipsam mollitia quae animi adipisci, officia dignissimos tempore cum et incidunt perspiciatis vero, nihil esse quis delectus libero, nobis obcaecati ut praesentium? Pariatur voluptate amet necessitatibus atque perspiciatis quae maiores earum, dolore, officia excepturi aperiam dolor animi laboriosam maxime sequi nobis. Blanditiis recusandae, aperiam error aspernatur perferendis suscipit nobis laborum incidunt consequatur a. Illum non doloribus sapiente sequi repudiandae maiores?</p>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10'>
          <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/>
          <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/>
          {/* <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/> */}
       </div>
       </div>
    </div>
  )
}

export default AboutInfo