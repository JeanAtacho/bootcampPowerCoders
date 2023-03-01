        const movies = [
            'Good Fellas.',
            'Los Picapiedras.',
            'Star Wars.',
            'The green Book.',
            'Spider Man.',
            'Los Advengers.',
            'Batman.',
            'Red Social.',
            'El milagro de P.Tinto.',
            'Mary Poppins.',
            'Avatar.',
            'SuperMan.',
            'Yo, Robot.',
            'El senor de los Anillos.',
            'Malditos Bastardos.',
            "Mario Bros."
        ]

        movies.forEach((movie, index) => {
            setTimeout(() => {
                console.log(movie)
            }, 500 * index)
        })