import { useState } from "react";

const Section = ({ tile, description, isOpen, toggleprop }) => {
    return (
        <div className="border-2 border-black  m-2 bg-[#C7E8CA] drop-shadow-xl ">
            <button onClick={toggleprop}>
                <h3 className="text-xl font-bold p-2">{tile}</h3>
            </button>
            {isOpen && <p className="p-2">{description}</p>}
        </div>
    )
};


const Instamart = () => {

    const [accordionState, setAccordionState] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,

    });

    // Different method
    // const toggleAccordion = (index) => {
    //     setAccordionState((prevState) => {
    //         const updatedState = { ...prevState };

    //         // Close all other accordions
    //         Object.keys(updatedState).forEach((key) => {
    //             updatedState[key] = false;
    //         });

    //         // Toggle the selected accordion
    //         updatedState[index] = !prevState[index];

    //         return updatedState;
    //     });
    // };

    const toggleAccordion = (index) => {
        const updatedAccordionState = Object.fromEntries(
            Object.entries(accordionState).map(([key, value], i) => [
                key,
                i === index ? !value : false,
            ])
        );
        setAccordionState(updatedAccordionState);
    };
    return (
        <div className="bg-[#5D9C59] p-2 pt-24">
            <h1 className="text-3xl p-2 m-2 font-black">Instamart</h1>
            <div>

                <Section
                    tile={"Swiggy Instamart pioneered the quick commerce grocery space in 2020"}
                    description={"Swiggy has been synonymous with the on-demand delivery of food from your favorite restaurants.Launched in August 2020, Swiggy Instamart was an extension of Swiggy’s mission to enable unparalleled convenience, just the way we have with food.Swiggy Instamart was born in the middle of the pandemic, in August 2020 and has led the way in creating this category in the country Today, Instamart is present in 28 cities and counting."}
                    isOpen={accordionState[0]}
                    toggleprop={() => toggleAccordion(0)}
                />

                <Section
                    tile={"Yes, we deliver in minutes. No, we don’t commit to doing so in 10-minutes"}
                    description={" With Instamart, customers will always get a range on the delivery promise.The range will depend on various factors like location, time of the day and the on-ground situation. When we started Swiggy Instamart we did deliveries in 30-45 minutes, with growth in the number of dark stores, improved tech, logistics and learnings, we brought it down 15-30 minutes.It’s not something that happened overnight nor something we worked backwards from."}
                    isOpen={accordionState[1]}
                    toggleprop={() => toggleAccordion(1)}
                />

                <Section
                    tile={"No, you don’t get your order in minutes because the delivery executive is riding fast"}
                    description={"We’re able to deliver fast because of the amazing tech and logistics play at work. There are primarily two parts to this process – pick/pack time and delivery. Technology plays a key role in making the pick+pack process efficient – ranging from the placement of items within the store to optimal routes for store personnel. On the delivery side, we leverage location intelligence to strategically place the network of seller-managed dark stores closer to the customer based on the demand density. The delivery executives are unaware of the delivery promise made to the customer (which in itself is a range), they are also not penalized nor incentivised based on the delivery time."}
                    isOpen={accordionState[2]}
                    toggleprop={() => toggleAccordion(2)}
                />

                <Section
                    tile={"It’s not just faster; it’s fresher"}
                    description={"Working with Farmer Producer Organizations (FPOs) and farmers through our third-party sellers allows us to get food from farm to table in under 24 hours. What this means is lesser use of shelf life-extending packaging and preservatives. Swiggy Instamart has also doubled down on the selection of verified, certified-organic produce, getting consumers a variety of organic and even hydroponically grown produce."}
                    isOpen={accordionState[3]}
                    toggleprop={() => toggleAccordion(3)}
                />

                <Section
                    tile={"Yes, groceries on-demand is a need for many"}
                    description={"Instamart’s users are those who are time-pressed and/or convenience seeking. While we initially believed that this meant the younger demographic of under 35, the last 22 months have seen users across all demographics. People who cannot head to a supermarket or a kirana store due to time constraints, work, family or health commitments or simply those who want to use that time to relax and unwind. On-demand purchases are also bringing about a reduction in hoarding and wastage as people are only buying what they need."}
                    isOpen={accordionState[4]}
                    toggleprop={() => toggleAccordion(4)}
                />

            </div>
        </div >
    );
};

export default Instamart;