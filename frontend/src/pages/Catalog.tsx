import React, { useState, useEffect } from "react";
import axios from "axios";

import AddVehicleModal from "../modals/AddVehicleModal";
import EditVehicleModal from "../modals/EditVehicleModal";
import DeleteVehicleModal from "../modals/DeleteVehicleModal";
import Title from "../components/Title";

import { BASE_URL } from "../config/apiConfig";

import { Vehicle } from "../types";

const tableHeaders: string[] = [
  "code",
  "brand",
  "model",
  "registraion",
  "color",
];

type Props = {};

const Catalog = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      const axiosConfig = {
        method: "GET",
        url: `${BASE_URL}vehicles`,
        // headers: {
        //   Authorization: `Bearer ${getAccess()}`,
        // },
      };
      axios(axiosConfig)
        .then((response) => {
          setVehicles(response.data.vehicles);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getVehicles();
  }, []);

  return (
    <div className="">
      <Title title="vehicle catalog" />
      <div className="my-5 flex items-center justify-between">
        <p className="font-semibold">Total Vehicles : {vehicles.length}</p>
        <AddVehicleModal />
      </div>
      <div className="">
        <div className="bg-white grid grid-cols-6 p-3 rounded-xl border border-light">
          {tableHeaders.map((item) => (
            <div className="" key={item}>
              <p className="capitalize font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-light mt-3">
          {vehicles.map((vehicle) => (
            <div className="grid grid-cols-6 p-3" key={vehicle._id}>
              <div className="">
                <p className="uppercase">{vehicle.code}</p>
              </div>
              <div className="">
                <p className="capitalize">{vehicle.brand}</p>
              </div>
              <div className="">
                <p className="capitalize">{vehicle.brandModel}</p>
              </div>
              <div className="">
                <p className="capitalize">{vehicle.registration}</p>
              </div>
              <div className="">
                <p className="capitalize">{vehicle.color}</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <EditVehicleModal _id={vehicle._id} />
                <DeleteVehicleModal _id={vehicle._id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
