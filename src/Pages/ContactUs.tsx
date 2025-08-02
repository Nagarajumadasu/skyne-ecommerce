import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white text-black min-h-screen py-16 px-6 font-[Outfit] max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-2 text-lg text-gray-600">We'd love to hear from you. Drop us a line!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Contact Information Card */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Service</CardTitle>
            <CardDescription>We're here to help you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-600">
              <Clock size={20} />
              <p className="font-medium text-lg text-white">Mon - Sat | 10AM – 6PM</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={20} className="text-yellow-600" />
              <a href="tel:+918688114109" className="font-medium text-lg hover:underline">+91 8688114109</a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={20} className="text-yellow-600" />
              <a href="mailto:skyne.support@gmail.com" className="hover:underline">skyne.support@gmail.com</a>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Can We Help?</h2>
        <p className="text-gray-700">
          Our team was handpicked for their understanding of materials, process,
          and fashion. Whether you are Browse our site or visiting us, we're here
          to assist. Most common queries are covered in our{' '}
          <Link to="/faqs" className="text-yellow-600 font-medium hover:underline">
            FAQs
          </Link>.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;