import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Smile, Settings, Headset } from 'lucide-react';

export default function AboutPage() {
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About Us</h1>
        <p className="text-gray-600 text-center mb-10">
          Empowering Shopify store owners with expert management and automation solutions.
        </p>

        {/* Full-Width Section with Background */}
        <section className="py-16 bg-gray-100 w-full">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            {/* Who We Are */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
              <p className="text-gray-700 mt-4">
                Brick Enterprises LLC is a leading Shopify store management and maintenance service provider. 
                With over 15 years of experience in e-commerce and web development, we have helped hundreds 
                of businesses streamline their online stores, automate workflows, and scale their operations seamlessly.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
              <p className="text-gray-700 mt-4">
                Our mission is to empower entrepreneurs and business owners by handling the technical side of Shopify 
                so they can focus on what they do best—growing their business. We provide reliable, efficient, and 
                customized solutions tailored to meet the unique needs of each store.
              </p>
            </section>
          </div>
        </section>

        {/* Two-Column Layout Starts Here */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
          {/* Left Column: Services & Benefits */}
          <div>
            {/* What We Do */}
            <section>
              <h2 className="text-2xl font-semibold">What We Do</h2>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Shopify Store Maintenance & Updates</li>
                <li>Product & Content Management</li>
                <li>Custom Shopify Development & Automation</li>
                <li>Performance Optimization & Troubleshooting</li>
                <li>Ongoing Support & Growth Strategy</li>
              </ul>
            </section>

            {/* Why Choose Us with Icons */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
              <div className="mt-4 space-y-6">
                <div className="flex items-center space-x-4">
                  <Briefcase className="h-6 w-6 text-orange-500" />
                  <p><strong>15+ Years of Experience:</strong> Deep expertise in Shopify and e-commerce.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Smile className="h-6 w-6 text-orange-500" />
                  <p><strong>Hundreds of Happy Clients:</strong> Proven success in optimizing Shopify stores.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Settings className="h-6 w-6 text-orange-500" />
                  <p><strong>Customized Solutions:</strong> Every store is unique, and so is our approach.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Headset className="h-6 w-6 text-orange-500" />
                  <p><strong>Reliable Support:</strong> We're here when you need us.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Team Image & Call to Action */}
          <div>
            {/* Meet the Team */}
            <section className="text-left">
              <h2 className="text-2xl font-semibold">Meet Our Team</h2>
              <div className="mt-6 flex flex-col items-start">
                <img 
                  src="/img/team.jpg" 
                  alt="The Brick Enterprises LLC Team" 
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                />
                <p className="mt-4">
                  Our team comprises seasoned e-commerce experts with a passion for helping businesses succeed online. With diverse backgrounds in product management and technology, we bring innovative solutions to Shopify merchants looking to scale efficiently.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-left mt-8">
              <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
              <p>
                Whether you're launching a new store, need ongoing maintenance, or require advanced Shopify 
                customizations, we’re here to help. Get in touch with us today!
              </p>
              <div className="mt-4">
                <a href="/contact" target="_blank">
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-12 py-6 inline-flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
}
