import { v4 as uuid } from 'uuid'

import Header from '@/components/ui/Header'

type Author = {
  name: string
  linkUrl: string
}

type BlogPost = {
  id: string
  title: string
  description: string
  thumbnail: string
  createdAt: string
  author: Author
  time: string
  categories: string[]
}

function unique<T>(source: T[]): T[] {
  return Array.from(new Set(source))
}

export default function Home() {
  const data = Array<BlogPost>(4).fill({
    id: uuid(),
    title: 'What you want to know about hub spot',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim dolorum sunt dolores officiis.',
    createdAt: new Date().toString(),
    time: '5 minutes read',
    thumbnail: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
    categories: [
      'Orange',
      'Apple',
      'Avocado',
      'Banana',
      'Tomatoes',
      'Grapes',
      'Pineapples',
      'Mangoes',
      'Strawberries',
    ],
    author: {
      name: 'Eder Lima',
      linkUrl: 'https://github.com/asynched',
    },
  })

  return (
    <div className="text-gray-900">
      <Header />
      <main className="mx-auto flex w-[90%] max-w-screen-xl gap-8">
        <section className="grid gap-8 md:grid-cols-2">
          {data.map((post) => (
            <div key={post.id}>
              <img
                className="rounded-t-lg"
                src={post.thumbnail}
                alt={post.title}
              />
              <div className="flex flex-col items-start px-4 py-2">
                <p className="mb-2 text-pink-600">CATEGORY</p>
                <h2 className="mb-2 text-2xl font-bold tracking-tighter">
                  {post.title}
                </h2>
                <p className="mb-2 text-gray-600">{post.description}</p>
                <a className="mb-8 text-pink-600 hover:underline" href="/">
                  Read full story
                </a>
                <p className="text-gray-600">
                  By: {post.author.name} | On:{' '}
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: '2-digit',
                  })}
                  .
                </p>
              </div>
            </div>
          ))}
        </section>
        <nav className="hidden w-[72rem] md:block ">
          <div className="mb-12 flex flex-col rounded-lg bg-blue-100 p-4">
            <h2 className="mb-2 text-2xl font-bold tracking-tighter">
              This is open source!
            </h2>
            <p className="mb-2 text-gray-600">
              Check the source code clicking the link down below!
            </p>
            <a
              className="rounded bg-pink-600 py-2 text-center text-sm text-white"
              href="/"
            >
              Source code
            </a>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tighter">
              Categories
            </h2>
            <ul className="flex flex-wrap gap-2">
              {unique(data.flatMap((post) => post.categories)).map(
                (category) => (
                  <li
                    className="rounded-full bg-blue-100 py-1 px-3 text-sm text-gray-600"
                    key={category}
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </main>
    </div>
  )
}
