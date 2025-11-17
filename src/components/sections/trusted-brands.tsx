import Image from 'next/image';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';

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
                  <Image
                    height={75}
                    width={150}
                    src={'/logos/microsoft-for-startups.svg'}
                    alt="Microsoft For Startups Logo"
                  />
                </li>
                <li>
                  <Image height={75} width={75} src={'/logos/icf.svg'} alt="ICF Logo" />
                </li>
                <li>
                  <Image
                    height={100}
                    width={180}
                    src={'/logos/business-for-good.svg'}
                    alt="Business For Good Logo"
                  />
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
