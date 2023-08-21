export const ShimmerCard = () => {
    return (
        <div className="basis-[250px] mob:basis-[150px] p-2 mb-2 mt-4 shadow-2xl animate-pulse bg-[#DDF7E3]">
            <div className="h-[144px] w-[230px] bg-bio mob:w-[130px] mob:h-[81px] bg-[#74b383]" />
            <div className="w-3/5 mt-2.5 h-[15px]  bg-bio bg-[#a2daaf]" />
            <div className="w-4/5 mt-1 h-[15px]  bg-bio bg-[#a2daaf]" />
            <div className="w-full mt-[18px] h-[15px]  bg-bio bg-[#a2daaf]" />
        </div>
    )
}

const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-5 justify-center  ">
            {Array(20)
                .fill("")
                .map((e, index) =>
                    <ShimmerCard key={index} />
                )}
        </div>
    );
};

export default Shimmer;