import React from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon, LockOpenIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Coursecontents = ({ course }) => {
  return (
    <div className="my-2 sec-backgraund">
      <div className="">
      <h2 className="text-2xl primary-text">কোর্সের পরিপূর্ণ কারিকুলাম</h2>
        <div className="w-full">
          <div className="w-full">
            <dl className="mt-2 ">
              {course?.chapters?.map((chapter, chapterIndex) => (
                <Disclosure as="div" key={chapterIndex} className="py-1">
                  {({ open }) => (
                    <div className="border rounded-md p-4">
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left primary-text">
                          <span className="text-xl font-semibold leading-7">
                            {chapter?.title}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <ArrowUpCircleIcon
                                className="h-7 w-7 text-green-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArrowDownCircleIcon
                                className="h-7 w-7 text-blue-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="div" className="mt-2">
                        {chapter?.content?.map((contentItem, contentIndex) => (
                          <div key={contentIndex} className="flex items-center justify-between my-2">
                            <div className="flex items-center gap-1">
                              {contentItem?.demovedio? <PlayCircleIcon className="w-6 h-6 text-blue-500" /> : <PlayCircleIcon className="w-6 h-6 text-gray-300" />}
                              <p className="primary-text lg:text-xl">
                                {contentItem?.title}
                              </p>
                            </div>
                            {contentItem?.demovedio? <LockOpenIcon className="w-6 h-6 text-blue-500" /> : <LockClosedIcon className="w-6 h-6 text-gray-300" />}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecontents;

