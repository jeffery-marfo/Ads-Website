import React, { useState } from "react"
import blackBag from "../../assets/images/blackbag.png"
import redBag from "../../assets/images/redbag.png"
import greenBag from "../../assets/images/greenbag.png"
import browmBag from "../../assets/images/brownbag.png"
import paypal from "../../assets/images/paypal.png"
import visa from "../../assets/images/visa.png"
import stripe from "../../assets/images/stripe.png"
import { useParams } from "react-router"
import { useEffect } from "react"
import { apiGetSingleAdvert } from "../../services/adverts"


const SingleAd = () => {
    const { id } = useParams();
    const [ad, setAd] = useState({});

    const getAd = async () => {
        try {
            const response = await apiGetSingleAdvert(id);
            setAd(response.data)
        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => {
        getAd();
    }, []);


    return (
        <div className="flex flex-1/2 mt-10 justify-center m-20">
            <section>
                <div className="row mt-5 cursor-pointer">
                    <div className="col-lg-5 col-md-12 col-12 ">
                        <img className="w-320 h-full ml-4 pb-2" src={blackBag} alt="black handbag" />

                        <div className="sub-img flex flex-row ml-4 gap-1">
                            <div className="sub-img-col">
                                <img className="w-50" src={redBag} alt="red handbag" />
                            </div>
                            <div className="sub-img-col">
                                <img className="w-50" src={greenBag} alt="green handbag" />
                            </div>
                            <div className="sub-img-col">
                                <img className="w-50" src={browmBag} alt="brown handbag" />
                            </div>

                            {/* <div className="sub-img-col">
                            <img src=".jpg" width="100%" alt="">
                        </div> */}

                        </div>
                    </div>
                </div>
            </section>

            <section className="relative ml-40 p-10">

                <div className="col-lg-6 col-md-12 col-12 text-lg">
                    <header className="font-bold text-gray-500"><h2>Home / Ladies Bags</h2> </header>
                    <h3 className="font-bold font-large">Quality Ladies Leather Handbag</h3>
                    <h6><span className="font-bold">Price:</span> $650.00</h6>
                </div>

                <div className="flex gap-3 ">
                    <select className="my-3 border-2" name="ladies bag" id="leather handbag">
                        <option value="color">Select color</option>
                        <option value="color">black</option>
                        <option value="color">brown</option>
                        <option value="color">red</option>
                        <option value="color">green</option>
                        <option value="color">mauve</option>
                    </select>

                    {/* <input className="border-2 my-3" type="number" value="1" max="100"/> */}

                    <label for="quantity"></label>
                    <input className="border-2 my-3" type="number" id="quantity" name="quantity" min="1" placeholder="Quantity"></input><br /><br />
                </div>
                <br />

                <div className="flex gap-2 ">

                    <button className="p-2 border-2 border-gray-500 shadow-gray-500 transition duration-150 ease-in-out hover:bg-blue-950 cursor-pointer rounded-md bg-black text-white w-30" type="submit">Start Order</button><br /> <br />
                    <button className="p-2 border-2 border-gray-500 shadow-gray-500 transition duration-150 ease-in-out hover:bg-blue-950 cursor-pointer rounded-md bg-black text-white w-30" type="submit">Add to Cart</button><br /> <br />
                    <button className="p-2 border-2 border-green-600  shadow-green-600 transition duration-150 ease-in-out hover:bg-green-950 cursor-pointer rounded-md bg-green-900 text-white w-30" type="submit">Chart Now</button>
                </div>
                <br /><br />

                <h4 className="font-bold text-lg">Product Details</h4>
                <span>
                    The leather tote bag is extremely versatile and designed in a professional vintage style. <br /> The extra depth and subtle extra width of this leather tote bag means it can easily accommodate everything you need to get you through the working day. <br />Made from durable leather with sturdy handles, this bag is designed to last.</span>

                <div>
                    <br />
                    <h2 className="font-bold text-lg">Available Payment Options</h2><br />
                    <div className="flex cursor-pointer">
                        <img className="w-30" src={paypal} alt="payment options" />
                        <img className="w-30" src={stripe} alt="payment options" />
                        <img className="w-20" src={visa} alt="payment options" />


                    </div>
                </div>

                <div>
                    <br />
                    <h2 className="font-bold text-lg"> More than 100 Order</h2>
                    <p>To order more that 100 of these leather handbags in one purchase reach out to vendor.</p><br />
                    <button className="p-2 border-2 border-amber-800  shadow-amber-800 transition duration-150 ease-in-out hover:bg-amber-800 cursor-pointer rounded-md bg-amber-200 text-black font-bold ml-10 w-60" type="submit">Send Enquiry Now</button>
                </div>
            </section>


        </div>


    )
}


export default SingleAd
