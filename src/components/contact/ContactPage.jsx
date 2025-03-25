import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Briefcase,
  Building,
  Factory,
  Navigation,
  HomeIcon,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="px-4 py-20 md:px-20 lg:px-40 gap-8">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-lg text-center font-semibold">CONTACT US</h1>
        <h2 className="text-4xl font-bold text-center mt-2">
          We Are Ready To Help You
        </h2>
        <div className="flex justify-center mt-2 mb-12">
          <div className="w-20 h-1 bg-orange-400"></div>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Briefcase className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Corporate Offices</h3>
              <p className="text-gray-600">
                416, Prem Trade Centre, Maharani Road, Indore [M.P] 452 007,
                INDIA
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Send Email</h3>
              <p className="text-gray-600">info@shreeengineers.in</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Clock className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Open Timing</h3>
              <p className="text-gray-600">Mon - Sat: 10:30 AM - 7:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Offices Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center">Registered Offices</h2>
        {/* <h3 className="text-center text-gray-600 mt-1">SHREE ENGINEERS & CONTRACTORS PVT. LTD.</h3> */}
        <div className="flex justify-center mt-2 mb-12">
          <div className="w-20 h-1 bg-orange-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Madhya Pradesh</h3>
              <p className="text-gray-600">
                416, Prem Trade Centre, Maharani Road, Indore, Madhya Pradesh,
                India 452007
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">0731-4972217, 0731-4266310</p>
              <p className="text-gray-600">08718812602, 09713008217</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">info@shreeengineers.in</p>
              <p className="text-gray-600">http://www.shreeengineers.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Units Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center">Manufacturing Units</h2>
        {/* <h3 className="text-center text-gray-600 mt-1">SHREE CERAMIC FIBERS PVT. LTD. & SHREE POLY FOAM PVT. LTD</h3> */}
        <div className="flex justify-center mt-2 mb-12">
          <div className="w-20 h-1 bg-orange-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Madhya Pradesh</h3>
              <p className="text-gray-600">
                Smart Industrial Park Natrip, Plot No. 72, near NATRAX,
                Pithampur, Asukhedi, Madhya Pradesh 454775
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">07292-653217</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">info@shreecera.com</p>
              <p className="text-gray-600">Website: www.shreecera.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Operation Office Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center">Operation Office</h2>
        {/* <h3 className="text-center text-gray-600 mt-1">SHREE ENGINEERS & CONTRACTORS PVT. LTD</h3> */}
        <div className="flex justify-center mt-2 mb-12">
          <div className="w-20 h-1 bg-orange-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">VADODARA</h3>
              <p className="text-gray-600">
                Shree Engineers & Contractors Pvt. Ltd. 608, Mid Town Heights,
                Anupam Society, Jetalpur Road, Vadodara (Gujarat) - 390005
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">07226948419</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">info@shreeinsul.com</p>
              {/* <p className="text-gray-600">Website: www.shreecera.in</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Regional Offices Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center">Regional Offices</h2>
        {/* <h3 className="text-center text-gray-600 mt-1">SHREE ENGINEERS & CONTRACTORS PVT. LTD</h3> */}
        <div className="flex justify-center mt-2 mb-12">
          <div className="w-20 h-1 bg-orange-400"></div>
        </div>

        {/* New Delhi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">New Delhi</h3>
              <p className="text-gray-600">
              Shree Engineers & Contractors Pvt. Ltd.	
						B-107, 4TH Floor,DDA Shed,
						Okhla Industrial area, Phase-I,
						New Delhi - 110020

              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">08527947914</p>
              {/* <p className="text-gray-600">08527947914</p> */}
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">munjesh@shreeinsul.com</p>
              {/* <p className="text-gray-600">munjesh@shreeengineers.net.in</p> */}
            </div>
          </div>
        </div>

        {/* Mumbai */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Mumbai</h3>
              <p className="text-gray-600">
              Shree Engineers & Contractors Pvt. Ltd.
						C-501, Groma House, Opp. Dana Bazaar, APMC Market-2
						Sector 19A, Vashi Navi Mumbai-400 705
              </p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">+91 9819568508 / 8169763852</p>
              {/* <p className="text-gray-600">09594909217</p> */}
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">vpandey@shreeinsul.com</p>
              {/* <p className="text-gray-600">ashish@shreeengineers.net.in</p> */}
            </div>
          </div>
        </div>

        {/* Kolkata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Kolkata</h3>
              <p className="text-gray-600">Kolkata, India</p>
            </div>
          </div> */}

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">09339832918</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">bandodk@shreecera.in</p>
            </div>
          </div>

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Phone className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <p className="text-gray-600">09943275456</p>
            </div>
          </div>
        </div>

        {/* Chennai */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <MapPin className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Chennai</h3>
              <p className="text-gray-600">Old No. 43, New No. 24, 1 Floor, Trunk Road, Porur, Chennai, India - 600116</p>
            </div>
          </div> */}

          <div className="flex items-center p-6 border border-gray-200 rounded-md">
            <div className="flex-shrink-0 mr-4">
              <div className="w-14 h-14 bg-gray-100 rounded-md flex items-center justify-center">
                <Mail className="text-orange-400" size={28} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <p className="text-gray-600">
                jmaulchennai@shreeengineers.net.in
              </p>
              <p className="text-gray-600">jmr@shreecera.co.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="grid grid-cols-1 p-5 rounded-xl md:p-10 bg-gray-100 md:grid-cols-2 gap-5 md:gap-10">
        <div className="w-full h-auto bg-gray-200 min-h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1691312421544!2d75.59259177507771!3d22.572776779491633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39625120dc848675%3A0x941728317abae187!2sSHREE%20INSULATIONS%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1741173244438!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="min-h-80"
            loading="lazy"
          ></iframe>
        </div>

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
            <Button className="w-full bg-orange-400 text-white hover:bg-gray-1000">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
