import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';
import { features } from 'process';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Essentials Plan');
  const plusPlan = products.find((product) => product.name === 'Growth Plan');
  const premiumPlan = products.find((product) => product.name === 'Premium Plan');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);
  const premiumPrice = prices.find((price) => price.productId === premiumPlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Find the Right Plan for Your Shopify Store
        </h3>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're just starting out, scaling your business, or need advanced customizations, we have a plan for you.
        </p>
      </div>
      <div className="pt-6 grid md:grid-cols-3 gap-2 max-w-xxl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || 'month'}
          trialDays={basePrice?.trialPeriodDays || 0}
          features={basePlan?.features || []}
          priceId={basePrice?.id}
        />
        <PricingCard
          name={plusPlan?.name || 'Plus'}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || 'month'}
          trialDays={plusPrice?.trialPeriodDays || 0}
          features={plusPlan?.features || []}
          priceId={plusPrice?.id}
        />
        <PricingCard
          name={premiumPlan?.name || 'Plus'}
          price={premiumPrice?.unitAmount || 1500}
          interval={premiumPrice?.interval || 'month'}
          trialDays={premiumPrice?.trialPeriodDays || 0}
          features={premiumPlan?.features || []}
          priceId={premiumPrice?.id}
        />
      </div>
      <div className="pt-6 text-center">
        <p className="pt-6 text-gray-600">
          Not sure which plan is right for you? <a href="/contact" className="text-orange-500 font-medium">Contact us</a> for a free consultation.
        </p>
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {

    // Format price as USD currency
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price / 100);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      {/*<p className="text-sm text-gray-600 mb-4">
        with {trialDays} day free trial
      </p>*/}
      <p className="text-4xl font-medium text-gray-900 mb-6">
      {formattedPrice}{' '}
        <span className="text-xl font-normal text-gray-600">
          / {interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
