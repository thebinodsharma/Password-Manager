<h1 className='w-[25vw]'>{item.url}</h1><button>click</button>
                        <h1 className='w-[25vw] text-center'>{item.username}</h1>
                        <h1 className='w-[25vw]' ref={hRef}>{"*".repeat(item.password.length)}</h1>
                        <span className='flex gap-4 w-[25vw]'><button onClick={() => { handleEdit(item.id) }}><lord-icon
                            src="https://cdn.lordicon.com/ayhtotha.json"
                            trigger="hover">
                        </lord-icon></button>
                            <button onClick={() => { handleDelete(item.id) }} ><lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover">
                            </lord-icon></button></span>