import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, ShoppingCart, Wrench } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Your Shopify
                <span className="block text-yellow-500">store manager</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Let us handle your Shopify store maintenance so you can focus on growing your business. 
              We help entrepreneurs and small businesses scale their online presence—faster and more efficiently.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="/pricing"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-half text-lg px-10 py-8 inline-flex items-center justify-center">
                    Our pricing plans
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img 
              src="/img/shopify-store-clerks.png" 
              alt="Shopify Store Management" 
              className="w-full rounded-lg shadow-lg"
            />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <Wrench className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Shop Maintenance
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Keep your store running smoothly with regular updates, 
                  security patches, and performance optimizations, so you never lose a sale due to technical issues.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Product & Content Management
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  We handle adding new products, managing collections, 
                  updating descriptions, and optimizing content to keep your storefront fresh and engaging.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Customization & Automation
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Get tailored Shopify features, theme customizations, and automated workflows 
                  to save time and enhance your store’s functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                15 Years of Shopify Expertise
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                We've helped hundreds of businesses scale their Shopify stores with expert maintenance, customization, and automation. 
                Let us handle the technical details so you can focus on growing your brand.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="/contact"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-half text-lg px-12 py-6 inline-flex items-center justify-center">
                  Contact Us
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
