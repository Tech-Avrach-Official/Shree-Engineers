import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="px-40 py-20 gap-8">
      {/* Left Side - Message Form */}
      <div className='grid grid-cols-1 p-10 bg-gray-100 md:grid-cols-2 gap-10'>
        <div>
        <h2 className="text-3xl font-bold mb-6">Message us, we will be in touch shortly</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque repudiandae nulla ducimus fugit vel, est amet iure quaerat nemo culpa dicta beatae quo exercitationem distinctio earum esse delectus nisi. Tempore repellendus ad, ipsam nulla ex illo saepe aspernatur, a possimus nobis numquam eaque quod expedita, enim quidem! Dolore repudiandae aliquam odit minima! Minima temporibus, veniam enim, illum libero, qui eligendi est velit unde architecto ullam in. Libero ratione aut voluptatum adipisci molestiae rerum tempora. Quibusdam dolor dolores cumque!
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <div 
              key={index} 
              className="bg-yellow-400 p-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              <Icon size={24} className="text-black" />
            </div>
          ))}
        </div>
        </div>

        {/* Contact Form */}
        <div>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Name" className="bg-white h-12" />
            <Input placeholder="Phone" className="bg-white h-12" />
          </div>
          <Input placeholder="Email" className="bg-white h-12" />
          <Input placeholder="Company" className="bg-white h-12" />
          <Input placeholder="Subject" className="bg-white h-12" />
          <Textarea 
            placeholder="Message"  
            className="min-h-[150px] bg-white"
          />
          <Button 
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Send Message
          </Button>
        </form>

        </div>
      </div>

      {/* Right Side - Contact Information & Map */}
      <div className='grid grid-cols-1 mt-20 md:grid-cols-2 border border-amber-400 p-10 rounded-2xl gap-10'>
        {/* Embedded Google Map (placeholder) */}
        <div className="w-full h-auto bg-gray-200">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1691312421544!2d75.59259177507771!3d22.572776779491633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39625120dc848675%3A0x941728317abae187!2sSHREE%20INSULATIONS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1741173244438!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
        </div>

<div>
<h3 className="text-2xl font-bold mb-6">Get in touch with us</h3>
        <p className="text-gray-600 mb-6">
          Explore some awesome contacts contact information & get solution for your problems.
        </p>

        {/* Contact Details */}
        <div className="grid grid-cols-2 gap-4">
          {/* Headquarters */}
          <div className="flex items-center border border-yellow-400 p-4 rounded-md space-x-4">
            <MapPin className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Headquarters</h4>
              <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-center border border-yellow-400 p-4 rounded-md space-x-4">
            <MapPin className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Headquarters</h4>
              <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-center border border-yellow-400 p-4 rounded-md space-x-4">
            <MapPin className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Headquarters</h4>
              <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-center border border-yellow-400 p-4 rounded-md space-x-4">
            <MapPin className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Headquarters</h4>
              <p className="text-gray-600">123 Business Street, New York, NY 10001</p>
            </div>
          </div>

          {/* Call Us */}
          {/* <div className="flex items-center space-x-4">
            <Phone className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p className="text-gray-600">+1 (234) 567-8901</p>
              <p className="text-gray-600">+1 (987) 654-3210</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-yellow-400" size={32} />
            <div>
              <h4 className="font-semibold">Email Us</h4>
              <p className="text-gray-600">contact@example.com</p>
              <p className="text-gray-600">support@example.com</p>
            </div>
          </div> */}
        </div>
</div>
      </div>
    </div>
  );
};

export default ContactPage;