import { Header } from './components/Header'
import { Post, PostType } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabiguedes.png",
      name: "Gabriela Guedes",
      role: "Sr Software Engineer"
    },
    publishedAt: new Date('2023-05-11 22:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabiguedes.png",
      name: "Gabriela Guedes",
      role: "Física/Matemática"
    },
    publishedAt: new Date('2023-05-11 22:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post 
                  key={post.id}
                  post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
