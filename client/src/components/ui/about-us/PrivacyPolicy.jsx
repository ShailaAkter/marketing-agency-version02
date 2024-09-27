"use client"

import ContainerBox from "../../shared/ContainerBox";

const PrivacyPolicy = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 h-screen flex justify-center items-center">
      <ContainerBox>
        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className=" text-secondary-light text-sm mb-10">
          We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect the data you provide when using our services.
        </p>
        
        <div className="space-y-6">
          {/* Section 1 */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-secondary mb-2">1. Information We Collect</h2>
            <p className="text-secondary-light text-sm">
              We collect personal information that you provide to us, such as your name, email address, and payment information when you subscribe to our services or contact us.
            </p>
          </div>
          
          {/* Section 2 */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-secondary mb-2">2. How We Use Your Information</h2>
            <p className="text-secondary-light text-sm">
              Your information is used to provide and improve our services, process payments, and communicate with you regarding your account and services.
            </p>
          </div>
          
          {/* Section 3 */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-secondary mb-2">3. Data Security</h2>
            <p className="text-secondary-light text-sm">
              We implement a variety of security measures to ensure the safety of your personal information, including encryption and secure servers.
            </p>
          </div>
          
          {/* Section 4 */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-secondary mb-2">4. Your Rights</h2>
            <p className="text-secondary-light text-sm">
              You have the right to access, update, or delete your personal information. You can contact us at any time for assistance.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-secondary mb-2">5. Changes to This Policy</h2>
            <p className="text-secondary-light text-sm">
              We may update this privacy policy from time to time. You will be notified of any changes through our website or via email.
            </p>
          </div>
          
          {/* Contact Section */}
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-primary mb-2">Contact Us</h2>
            <p className="text-secondary-light text-sm">
              If you have any questions about our privacy policy, please contact us at{' '}
              <a href="mailto:info@company.com" className="text-secondary underline">info@company.com</a>.
            </p>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default PrivacyPolicy;
