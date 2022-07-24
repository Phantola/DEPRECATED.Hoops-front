/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

export default function Modal(props) {
  const { isOpen, header, body, accept, deny, close } = props;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          deny();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-zinc-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-zinc-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-zinc-900 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-zinc-100"
                      >
                        {header}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-zinc-400">{body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-600 px-4 py-3 sm:px-6 flex flex-row-reverse">
                  {accept ? (
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center rounded-md shadow-sm px-2 py-2 bg-blue-300 text-base font-medium text-zinc-800 sm:w-20 sm:text-sm"
                      onClick={() => {
                        accept();
                        close();
                      }}
                    >
                      Accept
                    </button>
                  ) : (
                    ""
                  )}

                  {deny ? (
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-red-300 text-base font-medium text-zinc-800 sm:w-20 sm:text-sm"
                      onClick={() => {
                        deny();
                      }}
                    >
                      Deny
                    </button>
                  ) : (
                    ""
                  )}

                  {close ? (
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-zinc-100 text-base font-medium text-zinc-800 sm:w-20 sm:text-sm"
                      onClick={() => {
                        close();
                      }}
                    >
                      Cancel
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
