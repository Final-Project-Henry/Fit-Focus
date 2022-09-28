const LoadingCards = (props: { num: any }) => {
  const cards = [...props.num];

  return (
    <>
      {cards.map((e) => {
        return (
          <div
          key={e}
            className={`max-w-[75%] min-h-[40px] m-2 flex flex-col animate-pulse bg-[#111828cb]  shadow-md `}
          >
            <div className={`h-[200px] overflow-hidden  `}>
              <span className="object-cover h-[200px] w-full"></span>
            </div>
            <div className={` text-center `}>
              <span
                className={`inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              ></span>
              <span
                className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              ></span>
              <span
                className={`inline-block  bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
              ></span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default LoadingCards;
