interface User {
    name: string;
    age: number;
    site: object;
}

const user: User = {
    name: "포도빛",
    age: "20",
    site: {
        blog: "https://phodobit.kr",
        github: "https://github.com/smartwe0k",
    }
}

console.log(user);