import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({ content , deleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state +1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/gabiguedes.png" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriela Guedes</strong>
                            <time title="11 de Abril às 22:03h" dateTime="2023-05-11 22:00">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}