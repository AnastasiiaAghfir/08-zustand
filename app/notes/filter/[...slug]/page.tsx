import { Metadata } from 'next';
import { fetchNotes } from '@/lib/api';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? 'All Tags' : slug[0];

  return {
    title: `Notes - ${tag}`,
    description: `Browse notes tagged with ${tag}. NoteHub allows you to filter and view notes based on specific tags for better organization.`,
    openGraph: {
      title: `Notes - ${tag}`,
      description: `Browse notes tagged with ${tag}. NoteHub allows you to filter and view notes based on specific tags for better organization.`,
      url: `https://08-zustand-seven-bice-56.vercel.app/notes/filter/${tag === 'All Tags' ? 'all' : tag}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: '1200',
          height: '630',
          alt: `Notes - ${tag} | NoteHub`,
        },
      ],
    },
  };
}
export default async function Notes({ params }: Props) {
  const { slug } = await params;

  const tag = slug[0] === 'all' ? undefined : slug[0];

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', '', tag],
    queryFn: () => fetchNotes('', tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
