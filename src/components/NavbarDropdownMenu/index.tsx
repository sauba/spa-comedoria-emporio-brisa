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
                <div className="flex-col justify-start items-start">
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
                        <p
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-2xl
                            hover:cursor-none
                          `}
                        >
                          Serviços
                        </p>
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
                          href="#terapia"
                          className={`
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            xl:text-lg  
                          `}
                        >
                          Terapia
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
                          href="#levezaSelvagem"
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
                          Leveza Selvagem
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
                          href="#levetarot"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            xl:text-lg
                          `}
                        >
                          Leve Tarot
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
                          href="#produtos"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-2xl
                            gap-3
                            font-bold
                            hover:cursor-none
                          `}
                        >
                          Produtos
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
                          href="#caixinhaDaLeveza"
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
                          Caixinha da Leveza
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
                            ? "bg-lime-400 text-zinc-100 font-bold hover:rounded-r-full"
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
                            gap-3
                            text-sm
                            xl:text-2xl
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