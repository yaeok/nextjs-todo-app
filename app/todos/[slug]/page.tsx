const Page = () => {
  // todoの宣言
  const todo: {
    id: string
    title: string
    content: string
    createdAt: Date
  } = {
    id: '1',
    title: '買い物へ行く',
    content: '仕事終わりに夜ご飯の買い物へ行く',
    createdAt: new Date(),
  }
  return (
    <div className='py-32 flex flex-col gap-16 justify-center items-center'>
      <section className='w-2/3 space-y-2'>
        <h1 className='text-2xl font-bold'>{todo.title}</h1>
        <p>{todo.content}</p>
        <p className='text-end'>
          作成日 : {todo.createdAt.toLocaleDateString()}
        </p>
      </section>
      <section className='w-2/3 flex flex-row justify-between'>
        <button className='px-8 py-4 bg-orange-500 rounded-full text-white font-bold'>
          Todo更新
        </button>
        <button className='px-8 py-4 bg-red-500 rounded-full text-white font-bold'>
          Todo削除
        </button>
      </section>
    </div>
  )
}

export default Page
