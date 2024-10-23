export default function Navbar() {
    return(
        <header class="absolute top-0 z-50 h-24 w-full bg-lime-500">
            <div class="relative hidden h-full w-full justify-between lg:flex">
                <div class="flex h-full w-full items-center">
                    <ul class="flex items-center gap-2">
                        <li class="relative px-3 py-2">
                            <button class="relative z-10 flex items-center gap-2">
                                <span>Produkter
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-5 w-5 transition-all duration-300 rotate-0 transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </span>
                            </button>
                        </li>
                        <li class="relative px-3 py-2">
                            <button class="relative z-10 flex items-center gap-2">
                                <span>Kunder
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-5 w-5 transition-all duration-300 rotate-0 transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}