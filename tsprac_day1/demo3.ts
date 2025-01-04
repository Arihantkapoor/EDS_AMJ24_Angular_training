interface Book{
    name: string,
    pages: number
}

interface EBook extends Book{
    website: string,
    storage: number
}

interface AudioBook extends EBook{
    format: string
}

