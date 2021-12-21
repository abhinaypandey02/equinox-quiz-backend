export default interface ModelInterface {
    userID: string;
    competition: string;
    name: string;
    solved: {
        question: string,
        timestamp: string
    }[]
}