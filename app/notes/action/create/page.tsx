import css from '@/app/notes/action/create/CreateNote.module.css';
import { Metadata } from 'next';
import NoteForm from '@/components/NoteForm/NoteForm';

export const metadata: Metadata = {
  title: 'Create New Note | NoteHub',
  description:
    'Quickly create a new note in NoteHub - the efficient app for organizing your thoughts and ideas',
  openGraph: {
    title: 'Create New Note | NoteHub',
    description:
      'Quickly create a new note in NoteHub - the efficient app for organizing your thoughts and ideas',
    url: `https://08-zustand-seven-bice-56.vercel.app/notes/filter/action/create`,
    images: {
      url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
      width: '1200',
      height: '630',
      alt: 'Create New Note | NoteHub',
    },
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
