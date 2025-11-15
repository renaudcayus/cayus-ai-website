import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import BusinessForGoods from '../logos/business-for-goods';
import ICFLogo from '../logos/icf-logo';
import MicrosoftLogo from '../logos/microsoft-logo';

function TrustedBrands() {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.4}>
        <div className="py-14">
          <div className="mx-auto px-4 md:px-8">
            <h2 className="text-center text-sm font-medium font-heading text-neutral-600 uppercase">
              Trusted by the best in the industry
            </h2>
            <div className="mt-8">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                <li>
                  <MicrosoftLogo />
                </li>
                <li>
                  <ICFLogo />
                </li>
                <li>
                  <BusinessForGoods />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
}

export default TrustedBrands;
