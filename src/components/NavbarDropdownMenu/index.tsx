import { Menu, Transition } from "@headlessui/react"
import { ListBullets } from "@phosphor-icons/react"
import Image from "next/image"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-center items-center border-none outline-none overflow-hidden">
      <Menu as="div" className="w-full relative border-none outline-none">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-center items-center rounded-md text-zinc-100 border-none outline-none overflow-hidden">
              <ListBullets
                size={56}
                weight="bold"
                className={`px-2 border-none outline-none hover:cursor-pointer text-zinc-600`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="w-full min-h-screen justify-center items-center bg-own-orange-fosco overflow-hidden">
                <div className="w-full flex flex-col justify-center items-center">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center                                                       
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="/"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          <Image src={`/logo.svg`} width={256} height={256} alt="" className={`mx-auto`} />
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                        `}
                      >
                        <a
                          href="#empadas"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Empadas
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                        `}
                      >
                        <a
                          href="#sopas"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Sopas
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                        `}
                      >
                        <a
                          href="#lanches"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Lanches
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 text-center font-bold hover:rounded-r-full"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#cuscuz"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Cuscuz
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 text-center font-bold hover:rounded-r-full"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#pasteis"
                          className={`
                            flex
                            items-center
                            text-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg
                          `}
                        >
                          Pastéis
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#tapiocas"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            xl:text-lg
                          `}
                        >
                          Tapiocas
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-thin"
                          }
                        `}
                      >
                        <a
                          href="#doces"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Doces
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#bebidasgeladas"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            xl:text-lg
                            text-center
                          `}
                        >
                          Bebidas Geladas
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#bebidasquentes"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            xl:text-lg
                            text-center
                          `}
                        >
                          Hora do Café
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          
                          justify-center
                          items-center
                          ${active
                            ? "text-lime-400 font-bold hover:rounded-r-full hover:xl:text-2xl"
                            : "text-zinc-100 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#contato"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            xl:text-lg
                            text-center
                          `}
                        >
                          Contato
                        </a>
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}