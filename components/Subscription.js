import Image from 'next/image';

const Subscription = () => {
  return (
    <div className="w-full bg-[#FFFCEC] flex justify-center p-4">
      {/* Outer container to control the width */}
      <div className="w-full max-w-7xl p-8 rounded-lg relative flex flex-col items-start md:flex-row justify-between md:ml-[180px]">
        
        {/* Image Section (hidden on mobile) */}
        <div className="hidden md:flex w-1/3 items-end ml-[45px] relative">
          <Image
            src="/img/sub_DT.png"
            alt="Delicious food"
            width={220}
            height={240}
            className="object-contain absolute bottom-[-198px]" // Adjust the Y-axis with 'bottom'
          />
        </div>


        {/* Subscription Form */}
        <div className="w-full md:w-2/3 text-left mt-[8px] ml-[-15px]">
        <h2 className="text-black text-xl md:text-3xl font-nunito font-bold mb-4">
          Explora, sorpréndete y compra
        </h2>

          <p className="mb-6">Suscríbete y recibe las mejores recomendaciones de productos para ti.</p>
          <div className="flex flex-row gap-2 md:gap-3 w-full">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-[#7d7d7d] rounded-lg focus:outline-none focus:ring-1 w-[85%] md:w-[400px]"
            />
            <button
              type="submit"
              className="bg-[#FCD704] border border-[#FCD704] text-black px-0 py-2 rounded-lg w-[15%] min-w-[108px] md:w-[135px]
                        hover:bg-white hover:text-[#FCD704] hover:border-[#FCD704] transition-colors duration-300 ease-in-out"
            >
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;