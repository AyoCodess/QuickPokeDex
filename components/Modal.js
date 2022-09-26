import { Dialog, Transition } from '@headlessui/react';
import { useRef, Fragment } from 'react';

import XIcon from '@heroicons/react/outline/XIcon';

export const Modal = ({ openModal, setOpenModal, modalContent }) => {
  const getLink = useRef(null);
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        style={{ zIndex: '9000' }}
        as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={getLink}
        onClose={setOpenModal}>
        <div className='flex items-end justify-center md:min-h-screen min-h-[70vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen '
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
            <div className='relative justify-between align-middle inline-block  '>
              <div
                className={`w-[22rem] max-h-[40rem] sm:w-[36rem] md:w-[43rem] lg:w-[60rem] overflow-x-hidden bg-white rounded-lg text-left shadow-xl  transform transition-all`}>
                <div className='overflow-scroll'>
                  <div className={` px-2 pt-2 pb-`}>
                    <div className='flex flex-col'>
                      <div className='flex items-center'>
                        <XIcon
                          className='cursor-pointer h-6'
                          onClick={() => setOpenModal(false)}
                        />
                        <h2 className=' w-full text-lg font-medium mr-6 text-center '>
                          More Images
                        </h2>
                      </div>

                      <hr className='border mt-2  ml-[-2rem]' />
                      <div className='mt-2 text-left mb-2'>
                        {' '}
                        <section>{modalContent}</section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
