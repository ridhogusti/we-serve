import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Why do we need to use Kapp?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
  {
    question: "Do we need to pay 6 months per item?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
  {
    question: "How to migrate from other service?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
  {
    question: "What if data doesn’t get stored?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
  {
    question: "Can we guarantee no any loss at all?",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
  {
    question: "Send e-mail to us for other questions",
    answer:
      "Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments",
  },
];

export default function Faq() {
  return (
    <div className="px-6 lg:px-8 xl:mx-[72.5px]">
      <div className="mx-auto">
        <h2 className="text-center font-clashDisplay text-[46px] font-semibold leading-normal text-[#080C2E]">
          Frequently Asked Questions
        </h2>
        <div className="mt-[30px] grid grid-cols-1 gap-5 lg:grid-cols-2">
          <dl className="flex flex-col gap-5">
            {faqs.slice(0, Math.round(faqs.length / 2)).map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="h-fit rounded-2xl bg-white"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl bg-white p-5">
                        <span className="font-poppins text-xl font-bold leading-normal text-[#080C2E]">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <div className="rounded-[100px] bg-[#080C2E] p-[10px]">
                              <ChevronUpIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="p-4">
                      <p className="mb-4 font-poppins text-base font-medium leading-8 text-[#5D5D7C]">
                        {faq.answer}
                      </p>
                      <a
                        href="#"
                        className="font-poppins text-base font-semibold text-[#640EF1]"
                      >
                        Learn More
                      </a>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="flex flex-col gap-5">
            {faqs.slice(Math.round(faqs.length / 2), faqs.length).map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="h-fit rounded-2xl bg-white"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-2xl bg-white p-5">
                        <span className="font-poppins text-xl font-bold leading-normal text-[#080C2E]">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <div className="rounded-[100px] bg-[#080C2E] p-[10px]">
                              <ChevronUpIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="p-4">
                      <p className="mb-4 font-poppins text-base font-medium leading-8 text-[#5D5D7C]">
                        {faq.answer}
                      </p>
                      <a
                        href="#"
                        className="font-poppins text-base font-semibold text-[#640EF1]"
                      >
                        Learn More
                      </a>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
