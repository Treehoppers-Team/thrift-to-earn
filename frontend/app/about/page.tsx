import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">How It Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <StepCard
          number={1}
          title="Head to the thrift store"
          description="Support and show your love for thrifted clothing at stores or online"
        >
          <div className="relative w-full h-full">
            <Image
              src="/thrift_store.jpg"
              alt="Thrift Store"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </StepCard>

        <StepCard
          number={2}
          title="Show your QR Code"
          description="Show your vechain wallet QR code to the cashier during the checkout process"
        >
          <div className="relative w-full h-full">
            <Image
              src="/qr_code.avif"
              alt="QR Code"
              layout="fill"
              objectFit="contain"
              className="rounded-3xl"
            />
          </div>
        </StepCard>

        <StepCard
          number={3}
          title="Earn b3TR tokens"
          description="Upon approval, you will receive b3TR tokens in your wallet"
        >
          <div className="relative w-full h-full">
            <Image
              src="/shoppers.jpg"
              alt="Shoppers"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </StepCard>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  children,
}) {
  return (
    <div className="bg-gray-800 rounded-3xl p-6 flex flex-col items-center">
      <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <span className="text-xl font-bold">{number}</span>
      </div>
      <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-lg mb-6 text-center">{description}</p>
      <div className="w-48 h-48">
        {children}
      </div>
    </div>
  );
}
