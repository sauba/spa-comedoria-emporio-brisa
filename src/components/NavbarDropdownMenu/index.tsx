import { Menu, Transition } from "@headlessui/react"
import { House, ListBullets } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start border-none outline-none overflow-hidden">
      <Menu as="div" className="absolute border-none outline-none">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-zinc-100 border-none outline-none">
              <ListBullets
                size={68}
                weight="bold"
                className={`py-4 border-none outline-none hover:cursor-pointer text-zinc-600`}
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
              <Menu.Items className="origin-top-left absolute left-0 w-60 xl:bg-transparent">
                <div className="w-full flex flex-col justify-center items-center">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center                                                       
                          ${active
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full"
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
                          <House size={32} weight="bold" className={`text-zinc-600`} />
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
                            ? "text-zinc-100 font-bold hover:cursor-none"
                            : "text-zinc-100 font-bold"
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
                            ? "text-zinc-100 font-bold hover:cursor-none"
                            : "text-zinc-100 font-bold"
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
                            ? "text-zinc-100 font-bold hover:cursor-none"
                            : "text-zinc-100 font-bold"
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
                            ? "bg-lime-400 text-zinc-100 text-center font-bold hover:rounded-r-full"
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
                            ? "bg-lime-400 text-zinc-100 text-center font-bold hover:rounded-r-full"
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
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full hover:xl:text-2xl"
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
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full hover:xl:text-2xl"
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
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full hover:xl:text-2xl"
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
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full hover:xl:text-2xl"
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