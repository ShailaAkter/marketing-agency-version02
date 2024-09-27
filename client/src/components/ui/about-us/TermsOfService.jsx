import ContainerBox from '@/components/shared/ContainerBox';
import React from 'react';

const TermsOfService = () => {
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 flex justify-center items-center">
      <ContainerBox>
        <div className=" bg-white p-8 my-24 rounded-lg shadow-lg">
          <h1 className="text-2xl lg:text-3xl font-bold text-primary pb-3">Terms of Service</h1>
          <p className=" text-secondary-light text-sm mb-8">
            Welcome to our website. By accessing and using our services, you agree to the following terms and conditions. Please read these terms carefully.
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">1. Acceptance of Terms</h2>
              <p className="text-secondary-light text-sm">
                By using our services, you agree to comply with and be bound by these terms of service. If you do not agree with these terms, you are prohibited from using or accessing this site.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">2. Modifications</h2>
              <p className="text-secondary-light text-sm">
                We reserve the right to modify or replace these terms at any time. Any changes will be effective immediately upon posting. It is your responsibility to review these terms regularly.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">3. Use of Service</h2>
              <p className="text-secondary-light text-sm">
                You agree to use our services only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the service.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">4. Account Responsibilities</h2>
              <p className="text-secondary-light text-sm">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">5. Limitation of Liability</h2>
              <p className="text-secondary-light text-sm">
                We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">6. Governing Law</h2>
              <p className="text-secondary-light text-sm">
                These terms are governed by the laws of [Your Country]. Any disputes arising from these terms will be resolved in the courts of [Your Country].
              </p>
            </div>


          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default TermsOfService;
