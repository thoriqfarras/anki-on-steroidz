import { TrashIcon } from '@heroicons/react/24/outline';

export default function Deck({
  title,
  flashcardNum,
}: {
  title: string;
  flashcardNum: number;
}) {
  return (
    <div className="bg-zinc-100 drop-shadow-lg p-4 flex s w-full rounded-lg hover:brightness-90 cursor-pointer">
      <span className="font-bold">{title ? title : 'Deck Title'}</span>
      <span className="ml-auto mr-4">
        {flashcardNum ? flashcardNum : 'X flashcards'}
      </span>
      <TrashIcon className="h-6" />
    </div>
  );
}
