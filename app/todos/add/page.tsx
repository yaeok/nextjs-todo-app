'use client'

// react-hook-form のインポート
import { useForm } from 'react-hook-form'

// フォームタイプ
type FormType = {
  title: string
  content: string
}

const Page = () => {
  // react-hook-form の利用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    // フォームの初期値
    defaultValues: {
      title: '',
      content: '',
    },
  })

  // 保存処理
  const onSubmit = handleSubmit((data: FormType) => {
    // コンソール表示
    console.log(data)
  })

  return (
    // 登録フォーム
    <form onSubmit={onSubmit} className='flex flex-col items-center gap-4 p-4'>
      {/* タイトルフィールド */}
      <section className='w-full flex flex-col gap-2'>
        <label className='font-semibold'>タイトル</label>
        <input
          type='text'
          className='border-2 p-2 rounded-md'
          {...register('title', {
            // バリデーションルール
            // 必須入力
            required: {
              value: true,
              message: 'タイトルは必須です',
            },
            // 最大文字数
            maxLength: {
              value: 100,
              message: 'タイトルは100文字以内で入力してください',
            },
          })}
        />
        {/* エラーメッセージ */}
        {errors.title && (
          <span className='pl-2 text-red-500'>{errors.title.message}</span>
        )}
      </section>
      {/* 内容フィールド */}
      <section className='w-full flex flex-col gap-2'>
        <label className='font-semibold'>内容</label>
        <textarea
          className='border-2 p-2 rounded-md'
          {...register('content', {
            // バリデーションルール
            // 必須入力
            required: {
              value: true,
              message: '内容は必須です',
            },
            // 最大文字数
            maxLength: {
              value: 500,
              message: '内容は500文字以内で入力してください',
            },
          })}
        />
        {/* エラーメッセージ */}
        {errors.content && (
          <span className='pl-2 text-red-500'>{errors.content.message}</span>
        )}
      </section>
      {/* 保存ボタン */}
      <button
        type='submit'
        className='px-8 py-4 bg-orange-500 rounded-full text-white font-bold'
      >
        保存
      </button>
    </form>
  )
}

export default Page
