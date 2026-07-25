import { Author } from '@/types';

export const authors: (Author & {
    bio: string;
    fullName: string;
})[] = [
    {
        name: 'Arsan',
        fullName: 'Muh Arsan Akbar',
        picture: 'https://ui-avatars.com/api/?name=Muh+Arsan+Akbar&background=0D8ABC&color=fff',
        bio: 'Penulis dan pengembang.',
        github: 'https://github.com/minggo-commits',
        googleScholar: 'https://scholar.google.com/citations?user=VY0j7y8AAAAJ&hl=id',
    },
    {
        name: 'Azis',
        fullName: 'Abd Azis Syam',
        picture: 'https://ui-avatars.com/api/?name=Abd+Azis+Syam&background=0D8ABC&color=fff',
        bio: 'Kontributor konten dan web developer.',
        github: 'https://github.com/AzisSyam',
        googleScholar: 'https://scholar.google.com/citations?user=y_yunLQAAAAJ&hl=id',
    },
];

export function getAuthorByName(name: string) {
    return authors.find(
        (author) => author.name.toLowerCase() === name.toLowerCase()
    );
}

export function getAllAuthors() {
    return authors;
}
