'use client'

import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  // todo配列を宣言
  const [todos, setTodos] = useState<
    { id: number; title: string; content: string }[]
  >([
    {
      id: 1,
      title: '買い物へ行く',
      content: '仕事終わりに夜ご飯の買い物へ行く',
    },
    {
      id: 2,
      title: '資格勉強',
      content: '基本情報処理の試験対策を行う',
    },
  ])
  return (
    <div>
      <section className='flex flex-col gap-4'>
        {/* todo配列をmap関数を使用して展開する */}
        {todos.map((todo, index) => (
          <div
            key={index}
            className='bg-gray-100 p-4 rounded-md shadow-md flex flex-col gap-2'
          >
            {/* 詳細画面へ遷移する */}
            <Link href={`/todos/${index}`}>
              <span className='text-lg font-bold'>{todo.title}</span>
            </Link>
            <p>{todo.content}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Page
