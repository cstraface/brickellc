import { ProfileForm } from "./form";
import { Linkedin, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Have a question about our Shopify services? Need a custom solution? 
            We’re here to help—let’s discuss how we can support your business.
          </p>
        </div>

        {/* Two-Column Layout: Form & FAQs */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:mx-auto sm:w-full sm:max-w-4xl">
          
          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send Us a Message
            </h3>
            <ProfileForm />
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <details className="p-4 border rounded-lg bg-white shadow-md">
                <summary className="font-medium cursor-pointer">How soon will I get a response?</summary>
                <p className="mt-2 text-gray-600">We typically respond within 24 hours on business days.</p>
              </details>
              <details className="p-4 border rounded-lg bg-white shadow-md">
                <summary className="font-medium cursor-pointer">Do you offer custom Shopify solutions?</summary>
                <p className="mt-2 text-gray-600">Yes! We provide tailored solutions for Shopify store maintenance, automation, and custom development.</p>
              </details>
              <details className="p-4 border rounded-lg bg-white shadow-md">
                <summary className="font-medium cursor-pointer">Do you work with new Shopify stores?</summary>
                <p className="mt-2 text-gray-600">Absolutely! Whether you're just starting or scaling up, we’re here to support your Shopify journey.</p>
              </details>
            </div>
          </div>

        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-auto sm:w-full sm:max-w-4xl">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900">📧 Email Us</h4>
            <p className="text-gray-600">info@brickellc.com</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900">📞 Call Us</h4>
            <p className="text-gray-600">+1 (888) 803-2480</p>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900">📍 Home Base</h4>
            <p className="text-gray-600">Boise, Idaho</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://twitter.com/yourhandle" target="_blank" className="text-gray-500 hover:text-orange-500">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-500 hover:text-orange-500">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://facebook.com/yourpage" target="_blank" className="text-gray-500 hover:text-orange-500">
            <Facebook className="h-6 w-6" />
          </a>
        </div>

      </div>
    </section>
  )
}
