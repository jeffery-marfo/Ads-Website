import React, { useEffect } from "react";
import { apiGetAllAdverts } from "../../services/adverts";

// const Adverts = () => {
//   return <div>Adverts</div>;
// };

// export default Adverts;

function Adverts() {
  const fetchAds = async () => {
    try {
      const res = await apiGetAllAdverts();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAds();
  }, []);
  return <div>Adverts</div>;
}
export default Adverts;
