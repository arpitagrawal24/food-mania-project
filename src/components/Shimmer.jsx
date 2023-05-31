const Shimmer = () => {
    return (
        <div className="flex flex-wrap p-4 bg-[#5D9C59]">
            {Array(12)
                .fill("")
                .map((e, index) => (
                    <div key={index} className="w-56 h-56 m-2 bg-gray-200" />))}
        </div>
    );
};

export default Shimmer;