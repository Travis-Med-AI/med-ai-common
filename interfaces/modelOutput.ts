export interface ModelOutput {
    image: string;
    class_probabilities: {[key: string]: number};
    mask: string;
    display: string;
}