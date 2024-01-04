import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

import axios from "axios";

import { DeleteIcon } from "../components/icons";

import { BASE_URL } from "../config/apiConfig";

type Props = {};

const DeleteVehicleModal = (props: { _id: string }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");

  const { _id } = props;

  useEffect(() => {
    const getVehicle = async () => {
      setLoading(true);
      const axiosConfig = {
        method: "GET",
        url: `${BASE_URL}vehicles/${_id}`,
        // headers: {
        //   Authorization: `Bearer ${getAccess()}`,
        // },
      };
      axios(axiosConfig)
        .then((response) => {
          setCode(response.data.vehicle.code);
          setRegistration(response.data.vehicle.registration);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getVehicle();
  }, []);

  const editVehicle = async () => {
    setLoading(true);
    const axiosConfig = {
      method: "DELETE",
      url: `${BASE_URL}vehicles/${_id}`,
      // headers: {
      //   Authorization: `Bearer ${getAccess()}`,
      // },
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
      <button type="button" onClick={openModal} className="">
        <DeleteIcon />
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
                    Remove Vehicle
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="">
                      Are you sure you want to remove{" "}
                      <span className="font-semibold uppercase">
                        {code} : {registration}
                      </span>{" "}
                      from the system?
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red px-4 py-2 text-sm font-medium text-white hover:bg-darkBlue/75 focus:outline-none capitalize"
                      onClick={() => {
                        editVehicle();
                        closeModal();
                      }}
                    >
                      confirm
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

export default DeleteVehicleModal;
