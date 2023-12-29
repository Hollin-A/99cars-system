import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import axios from "axios";

import { BASE_URL } from "../config/apiConfig";

type Props = {};

const AddVehicleModal = (props: Props) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [brandModel, setBrandModel] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const addVehicle = async () => {
    setLoading(true);
    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}vehicles`,
      // headers: {
      //   Authorization: `Bearer ${getAccess()}`,
      // },
      data: {
        code,
        brand,
        brandModel,
        registration,
        color,
      },
    };
    axios(axiosConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-lg bg-darkBlue px-4 py-2 text-sm font-medium text-white hover:bg-darkBlue/75 focus:outline-none capitalize"
      >
        add vehicle
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-darkBlue/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Vehicle
                  </Dialog.Title>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="">
                      <p className="text-sm text-dark capitalize">code</p>
                      <input
                        className="w-full p-2 outline-none border-light border rounded-lg"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="99C1007"
                      />
                    </div>
                    <div className="">
                      <p className="text-sm text-dark capitalize">brand</p>
                      <input
                        className="w-full p-2 outline-none border-light border rounded-lg"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="Toyota"
                      />
                    </div>
                    <div className="">
                      <p className="text-sm text-dark capitalize">model</p>
                      <input
                        className="w-full p-2 outline-none border-light border rounded-lg"
                        value={brandModel}
                        onChange={(e) => setBrandModel(e.target.value)}
                        placeholder="Axio"
                      />
                    </div>
                    <div className="">
                      <p className="text-sm text-dark capitalize">
                        registration
                      </p>
                      <input
                        className="w-full p-2 outline-none border-light border rounded-lg"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                        placeholder="BHS 5567"
                      />
                    </div>
                    <div className="">
                      <p className="text-sm text-dark capitalize">color</p>
                      <input
                        className="w-full p-2 outline-none border-light border rounded-lg"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Pearl White"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-darkBlue px-4 py-2 text-sm font-medium text-white hover:bg-darkBlue/75 focus:outline-none"
                      onClick={() => {
                        addVehicle();
                        closeModal();
                      }}
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddVehicleModal;
